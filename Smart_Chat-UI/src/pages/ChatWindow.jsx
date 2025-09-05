import React, { useState, useEffect } from 'react';
import { ArrowLeft, Send, Sparkles, Lightbulb, FileText } from 'lucide-react';
import Message from '../components/Message';
import AIActionButton from '../components/AIActionButton';
import { currentUser, users } from '../data/dummyData';

// Gemini 2.0 Flash Lite API integration (mocked for demo)
async function fetchGeminiSummary(messages) {
  // Replace with actual Gemini API call
  // Example: POST to Gemini endpoint with messages
  // Return summary string
  return {
    keyTopics: 'Project progress discussion, UI changes planned for tomorrow, user flow ideas.',
    actionItems: 'Schedule discussion about UI changes and review user flow concepts.',
    sentiment: 'Positive and collaborative tone throughout the conversation.'
  };
}

async function fetchGeminiSmartReplies(lastMessage) {
  // Replace with actual Gemini API call
  // Example: POST to Gemini endpoint with lastMessage
  // Return array of professional replies
  return [
    `Thank you for your update. I'll review the changes and share feedback soon.`,
    `Let's schedule a meeting to discuss the UI changes in detail.`,
    `I appreciate your suggestions. Could you elaborate on the user flow ideas?`
  ];
}

async function fetchGeminiEnhanceText(text) {
  // Replace with actual Gemini API call
  // Example: POST to Gemini endpoint with text
  // Return enhanced text
  if (!text.trim()) return '';
  return `Professionally enhanced: ${text}`;
}

export default function ChatWindow({ chat, onBack, initialMessage = '' }) {
  const [newMessage, setNewMessage] = useState(initialMessage);
  const [showSummary, setShowSummary] = useState(false);
  const [showSmartReplies, setShowSmartReplies] = useState(false);
  const [messages, setMessages] = useState(chat ? chat.messages : []);
  const [summary, setSummary] = useState(null);
  const [smartReplies, setSmartReplies] = useState([]);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [loadingReplies, setLoadingReplies] = useState(false);
  const [loadingEnhance, setLoadingEnhance] = useState(false);

  // Sync messages with chat prop when chat changes
  useEffect(() => {
    setMessages(chat ? chat.messages : []);
    setNewMessage(initialMessage);
  }, [chat, initialMessage]);
  const handleEnhance = async () => {
    if (!newMessage.trim()) return;
    setLoadingEnhance(true);
    try {
      const enhanced = await fetchGeminiEnhanceText(newMessage);
      setNewMessage(enhanced);
    } catch (e) {
      setNewMessage('Error enhancing text.');
    }
    setLoadingEnhance(false);
  };

  const otherParticipant = chat?.participants.find((p) => p.id !== currentUser.id);
  const allUsers = [...users, currentUser];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now().toString(),
        senderId: currentUser.id,
        content: newMessage,
        timestamp: new Date(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
      setShowSmartReplies(false);
    }
  };

  const handleSmartReply = (reply) => {
    setNewMessage(reply);
    setShowSmartReplies(false);
  };

  const handleSummarize = async () => {
    setLoadingSummary(true);
    setShowSummary(true);
    try {
      const result = await fetchGeminiSummary(messages);
      setSummary(result);
    } catch (e) {
      setSummary({ keyTopics: 'Error fetching summary.', actionItems: '', sentiment: '' });
    }
    setLoadingSummary(false);
  };

  const handleGenerateReplies = async () => {
    if (!showSmartReplies) {
      setLoadingReplies(true);
      // Find last received message (not sent by current user)
      const lastReceived = [...messages].reverse().find(m => m.senderId !== currentUser.id);
      const lastMessage = lastReceived ? lastReceived.content : '';
      try {
        const replies = await fetchGeminiSmartReplies(lastMessage);
        setSmartReplies(replies);
      } catch (e) {
        setSmartReplies(['Error fetching smart replies.']);
      }
      setLoadingReplies(false);
    }
    setShowSmartReplies(!showSmartReplies);
  };

  if (!chat) return <div className="p-4">Chat not found</div>;

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="relative flex-shrink-0">
            <img
              src={otherParticipant?.avatar}
              alt={otherParticipant?.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className={`
              absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white
              ${otherParticipant?.status === 'online' ? 'bg-green-500' : 
                otherParticipant?.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'}
            `} />
          </div>
          
          <div>
            <h2 className="font-semibold text-gray-900">{otherParticipant?.name}</h2>
            <p className="text-sm text-gray-500 capitalize">{otherParticipant?.status}</p>
          </div>
        </div>

        {/* Summarize Button - top right */}
        <div className="absolute top-4 right-4">
          <AIActionButton
            icon={FileText}
            label={loadingSummary ? 'Summarizing...' : 'Summarize Thread'}
            onClick={handleSummarize}
            variant="primary"
          />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        {messages.map((message) => {
          const sender = allUsers.find((u) => u.id === message.senderId);
          return (
            <Message
              key={message.id}
              message={message}
              sender={sender}
              isCurrentUser={message.senderId === currentUser.id}
            />
          );
        })}
      </div>

      {/* Smart Reply Suggestions */}
      {showSmartReplies && (
        <div className="px-4 py-3 border-t border-gray-200 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="flex flex-wrap gap-2">
            {loadingReplies ? (
              <div className="text-sm text-gray-500">Loading suggestions...</div>
            ) : (
              smartReplies.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSmartReply(suggestion)}
                  className="px-4 py-2 text-sm bg-white border border-blue-300 rounded-full hover:bg-blue-50 shadow-sm transition-colors font-medium"
                  title="Insert reply"
                >
                  {suggestion}
                </button>
              ))
            )}
          </div>
        </div>
      )}

      {/* Message Input & Smart Replies Button */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2 items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          {/* Enhance Button - only icon, professional look */}
          <button
            onClick={handleEnhance}
            disabled={loadingEnhance || !newMessage.trim()}
            className={`p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200 flex items-center justify-center ${loadingEnhance ? 'opacity-60 cursor-not-allowed' : ''}`}
            title="Enhance message"
          >
            <Sparkles className="w-5 h-5" />
          </button>
          {/* Smart Replies Button - only icon, professional look */}
          <button
            onClick={handleGenerateReplies}
            className={`p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors duration-200 flex items-center justify-center ${showSmartReplies ? 'ring-2 ring-blue-400' : ''}`}
            title="Smart Replies"
          >
            <Lightbulb className="w-5 h-5" />
          </button>
          <button
            onClick={handleSendMessage}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Summary Modal */}
      {showSummary && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-5 h-5 text-green-500 animate-pulse" />
              <h3 className="text-lg font-bold text-gray-900">AI Thread Summary</h3>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-4">
              {loadingSummary ? (
                <div className="text-sm text-gray-500">Summarizing thread...</div>
              ) : summary ? (
                <>
                  <p className="text-sm text-gray-700">
                    <strong>Key Topics:</strong> {summary.keyTopics}
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Action Items:</strong> {summary.actionItems}
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Sentiment:</strong> {summary.sentiment}
                  </p>
                </>
              ) : (
                <div className="text-sm text-gray-500">No summary available.</div>
              )}
            </div>
            <button
              onClick={() => setShowSummary(false)}
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
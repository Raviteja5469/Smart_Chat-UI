import React, { useState } from 'react';
import ChatList from './pages/ChatList';
import ChatWindow from './pages/ChatWindow';
import NewChat from './pages/NewChat';
import { dummyChats, currentUser } from './data/dummyData';

function App() {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [chats, setChats] = useState(dummyChats);
  const [showWelcome, setShowWelcome] = useState(true);
  const [pendingIcebreaker, setPendingIcebreaker] = useState('');


  // When a chat is selected, hide the welcome page
  const handleChatSelect = (chatId) => {
    setSelectedChatId(chatId);
    setShowWelcome(false);
  };

  const handleNewChat = () => {
    setSelectedChatId(null);
  };

  const handleStartChat = (userObj, icebreakerText = '') => {
    const newChat = {
      id: Date.now().toString(),
      participants: [currentUser, userObj],
      messages: [],
      lastMessage: '',
      lastMessageTime: new Date(),
      unreadCount: 0,
    };
    setChats([...chats, newChat]);
    setSelectedChatId(newChat.id);
    setPendingIcebreaker(icebreakerText);
  };

  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar for Chat List */}
      <ChatList
        chats={chats}
        selectedChatId={selectedChatId}
        onChatSelect={handleChatSelect}
        onNewChat={handleNewChat}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {showWelcome ? (
          <div className="relative flex flex-1 flex-col items-center justify-center bg-white w-full h-full font-sans overflow-hidden" style={{fontFamily: 'Inter, Segoe UI, Arial, Helvetica, sans-serif'}}>
            {/* Background chat emoji effects */}
            <div className="absolute inset-0 pointer-events-none z-0">
              {/* Example chat bubbles and emojis */}
              <span className="absolute left-10 top-16 text-6xl opacity-10 animate-float-slow">💬</span>
              <span className="absolute right-20 top-32 text-7xl opacity-10 animate-float">📩</span>
              <span className="absolute left-1/2 top-1/4 text-5xl opacity-10 animate-float-fast">🤖</span>
              <span className="absolute right-10 bottom-24 text-6xl opacity-10 animate-float">💡</span>
              <span className="absolute left-24 bottom-10 text-7xl opacity-10 animate-float-slow">🗨️</span>
              <span className="absolute right-1/3 bottom-1/3 text-5xl opacity-10 animate-float">🔵</span>
            </div>
            {/* Animations for floating emojis */}
            <style>{`
              @keyframes float {
                0% { transform: translateY(0) scale(1); }
                50% { transform: translateY(-20px) scale(1.05); }
                100% { transform: translateY(0) scale(1); }
              }
              @keyframes floatSlow {
                0% { transform: translateY(0) scale(1); }
                50% { transform: translateY(-10px) scale(1.03); }
                100% { transform: translateY(0) scale(1); }
              }
              @keyframes floatFast {
                0% { transform: translateY(0) scale(1); }
                50% { transform: translateY(-30px) scale(1.08); }
                100% { transform: translateY(0) scale(1); }
              }
              .animate-float {
                animation: float 4s ease-in-out infinite;
              }
              .animate-float-slow {
                animation: floatSlow 7s ease-in-out infinite;
              }
              .animate-float-fast {
                animation: floatFast 2.5s ease-in-out infinite;
              }
            `}</style>
            <h2 className="relative z-10 text-5xl font-extrabold mb-6 text-blue-700 tracking-tight" style={{fontFamily: 'Inter, Segoe UI, Arial, Helvetica, sans-serif'}}>
              Welcome to <span className="text-blue-600">chatNetic</span>!
            </h2>
            <p className="relative z-10 text-gray-800 mb-10 text-2xl font-medium leading-relaxed max-w-2xl text-center justify-center" style={{fontFamily: 'Inter, Segoe UI, Arial, Helvetica, sans-serif'}}>
              Your smart AI-powered chat workspace.<br/>Start a conversation, collaborate, and get instant AI assistance.<br/>
              <span className="text-base text-gray-500 mt-2 block text-center">Designed for professionals and teams.</span>
            </p>
            <button
              className="relative z-10 inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700 transition-all duration-200 tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              style={{fontFamily: 'Inter, Segoe UI, Arial, Helvetica, sans-serif'}}
              onClick={() => setShowWelcome(false)}
            >
              Start Chatting
              <span className="inline-block animate-bounce-x">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right text-white">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
            <style>{`
              @keyframes bounceX {
                0%, 100% { transform: translateX(0); }
                50% { transform: translateX(8px); }
              }
              .animate-bounce-x {
                animation: bounceX 1s infinite;
              }
            `}</style>
          </div>
        ) : selectedChatId ? (
          <ChatWindow
            chat={selectedChat}
            onBack={() => setSelectedChatId(null)}
            initialMessage={pendingIcebreaker}
          />
        ) : (
          <NewChat
            onBack={() => setSelectedChatId(null)}
            onStartChat={handleStartChat}
          />
        )}
      </div>
    </div>
  );
}

export default App;
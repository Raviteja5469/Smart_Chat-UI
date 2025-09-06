import React, { useState } from 'react';
import { ArrowLeft, Sparkles, UserPlus } from 'lucide-react';
import AIActionButton from '../components/AIActionButton';
import { users } from '../data/dummyData';

export default function NewChat({ onBack, onStartChat }) {
  const [selectedUser, setSelectedUser] = useState('');
  const [icebreaker, setIcebreaker] = useState('');
  const [showIcebreaker, setShowIcebreaker] = useState(false);

  const generateIcebreaker = () => {
    const icebreakers = [
      "Hi! Hope you're having a great day. I wanted to touch base about our upcoming project.",
      "Hey there! I came across something interesting that might be relevant to our work together.",
      "Hi! Quick question - do you have a few minutes to discuss the latest updates?",
      "Hello! I hope you're doing well. I'd love to get your thoughts on something.",
    ];
    
    const randomIcebreaker = icebreakers[Math.floor(Math.random() * icebreakers.length)];
    setIcebreaker(randomIcebreaker);
    setShowIcebreaker(true);
  };

  const handleStartChat = () => {
    if (selectedUser) {
      const userObj = users.find((user) => user.id === selectedUser);
      if (userObj) {
        onStartChat(userObj, icebreaker);
      }
      // Do not call onBack here; let parent handle navigation after chat starts
    }
  };

  return (
    <div className="flex-1 bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          {/* <button
            type="button"
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button> */}
          <h1 className="text-xl font-bold text-gray-900">Start New Chat</h1>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 max-w-md mx-auto">
        <div className="space-y-6">
        {/* /* User Selection */} 
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Select team member to chat with:
                    </label>
                    <div className="space-y-2 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50">
                      {users.map((user) => (
                        <div
                          key={user.id}
                          onClick={() => setSelectedUser(user.id)}
                          className={`
                            p-3 rounded-lg cursor-pointer transition-all duration-200 border-2
                            ${selectedUser === user.id 
                              ? 'border-blue-500 bg-blue-50' 
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            }
                          `}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-10 h-10 rounded-full object-cover"
                              />
                              <div className={`
                                absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white
                                ${user.status === 'online' ? 'bg-green-500' : 
                                  user.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'}
                              `} />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500 capitalize">{user.status}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Icebreaker */}
          <div className="border-t border-gray-200 pt-6">
            <div className="text-center">
              <AIActionButton
                icon={Sparkles}
                label="Generate Icebreaker"
                onClick={generateIcebreaker}
                variant="primary"
              />
            </div>

            {showIcebreaker && (
              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Sparkles className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-700">AI-Generated Icebreaker</span>
                </div>
                <p className="text-sm text-gray-700">{icebreaker}</p>
              </div>
            )}
          </div>

          {/* Start Chat Button */}
          <button
            onClick={handleStartChat}
            disabled={!selectedUser}
            className={`
              w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg text-white font-medium transition-all duration-200
              ${selectedUser 
                ? 'bg-blue-500 hover:bg-blue-600 shadow-md hover:shadow-lg' 
                : 'bg-gray-300 cursor-not-allowed'
              }
            `}
          >
            <UserPlus className="w-5 h-5" />
            <span>Start Chat</span>
          </button>
        </div>
      </div>
    </div>
  );
}

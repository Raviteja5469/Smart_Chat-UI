import React from 'react';

export default function ChatListItem({ chat, users, currentUserId, onClick, isSelected }) {
  // Find the other participant's user object
  const otherParticipant = chat.participants.find(p => p.id !== currentUserId) || {};

  return (
    <div
      onClick={onClick}
      className={`p-4 border-b border-gray-200 cursor-pointer ${
        isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img
            src={otherParticipant.avatar || 'https://via.placeholder.com/40'}
            alt={otherParticipant.name || 'Unknown User'}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div
            className={`
              absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white
              ${otherParticipant.status === 'online' ? 'bg-green-500' : 
                otherParticipant.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'}
            `}
          />
        </div>
        <div>
          <div className="font-medium text-gray-900">{otherParticipant.name || 'Unknown User'}</div>
          <div className="text-sm text-gray-500">{chat.lastMessage || 'No messages'}</div>
        </div>
      </div>
    </div>
  );
}
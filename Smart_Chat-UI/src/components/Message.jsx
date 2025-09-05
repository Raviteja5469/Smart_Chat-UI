import React from 'react';

export default function Message({ message, sender, isCurrentUser }) {
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex max-w-xs lg:max-w-md ${isCurrentUser ? 'flex-row-reverse' : 'flex-row'} items-end space-x-2`}>
        {/* Avatar */}
        {!isCurrentUser && (
          <img
            src={sender?.avatar}
            alt={sender?.name}
            className="w-8 h-8 rounded-full object-cover flex-shrink-0"
          />
        )}
        
        {/* Message Bubble */}
        <div className={`
          px-4 py-2 rounded-2xl relative
          ${isCurrentUser 
            ? 'bg-blue-500 text-white rounded-br-md' 
            : 'bg-gray-100 text-gray-900 rounded-bl-md'
          }
          ${message.isAI ? 'border-2 border-green-200 bg-green-50 text-gray-900' : ''}
        `}>
          {message.isAI && (
            <div className="text-xs text-green-600 font-medium mb-1">AI Assistant</div>
          )}
          <p className="text-sm leading-relaxed">{message.content}</p>
          <div className={`text-xs mt-1 ${isCurrentUser ? 'text-blue-100' : 'text-gray-500'}`}>
            {formatTime(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
}

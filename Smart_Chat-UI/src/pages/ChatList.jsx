import React from 'react';
import { Plus, Search } from 'lucide-react';
import ChatListItem from '../components/ChatListItem';
import * as dummyData from '../data/dummyData';


const { users, currentUser } = dummyData;

export default function ChatList({ chats = [], selectedChatId, onChatSelect, onNewChat }) {
  const [search, setSearch] = React.useState('');

  // Filter chats by participant name (other than current user) or last message
  const filteredChats = Array.isArray(chats)
    ? chats.filter(chat => {
        const other = chat.participants.find(u => u.id !== currentUser.id);
        const nameMatch = typeof other?.name === 'string' && other.name.toLowerCase().includes(search.toLowerCase());
        const lastMsgMatch = typeof chat.lastMessage === 'string' && chat.lastMessage.toLowerCase().includes(search.toLowerCase());
        return nameMatch || lastMsgMatch;
      })
    : [];

  return (
    <div className="w-full lg:w-80 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900 ">chatNetic</h1>
          <button
            onClick={onNewChat}
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Chat List with scroll */}
      <div className="flex-1 overflow-y-auto max-h-[calc(100vh-200px)] scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50">
        {filteredChats.length > 0 ? (
          filteredChats.map((chat) => (
            <ChatListItem
              key={chat.id}
              chat={chat}
              users={users}
              currentUserId={currentUser.id}
              onClick={() => onChatSelect(chat.id)}
              isSelected={selectedChatId === chat.id}
            />
          ))
        ) : (
          <div className="p-4 text-gray-500">No chats available</div>
        )}
      </div>
      {/* Current User Name at Bottom */}
      <div className="px-4 py-5 border-t border-gray-200 bg-gray-50 text-center text-sm text-gray-700">
        <span>Logged in as <span className="font-semibold">{currentUser.name}</span></span>
      </div>
    </div>
  );
}
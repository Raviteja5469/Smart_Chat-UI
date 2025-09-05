import React from 'react';

export default function AIActionButton({ icon: Icon, label, onClick, variant = 'secondary' }) {
  const baseClasses = "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = variant === 'primary'
    ? "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 shadow-md hover:shadow-lg"
    : "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500 border border-gray-200";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
}

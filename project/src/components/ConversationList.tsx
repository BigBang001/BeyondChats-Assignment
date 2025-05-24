import React, { useState } from 'react';
import { ChevronDown, Clock } from 'lucide-react';
import { ConversationItem } from './ConversationItem';
import { Conversation } from '../types';

interface ConversationListProps {
  conversations: Conversation[];
  activeConversationId?: string;
  onSelectConversation: (id: string) => void;
}

export const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
  activeConversationId,
  onSelectConversation
}) => {
  const [filterOpen, setFilterOpen] = useState(5);
  const [filterTime, setFilterTime] = useState('Waiting longest');
  
  return (
    <div className="h-full flex flex-col border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Your inbox</h2>
        <div className="mt-2 flex justify-between">
          <button
            className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900"
            onClick={() => setFilterOpen(filterOpen === 5 ? 10 : 5)}
          >
            <span>{filterOpen} Open</span>
            <ChevronDown size={16} className="ml-1" />
          </button>
          <button
            className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900"
            onClick={() => setFilterTime(filterTime === 'Waiting longest' ? 'Recent first' : 'Waiting longest')}
          >
            <span>{filterTime}</span>
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <ConversationItem 
            key={conversation.id}
            conversation={conversation}
            isActive={conversation.id === activeConversationId}
            onClick={() => onSelectConversation(conversation.id)}
          />
        ))}
      </div>
    </div>
  );
};
import React from 'react';
import { cn, formatTimestamp, truncateText } from '../lib/utils';
import { Avatar } from './Avatar';
import { Conversation } from '../types';
import { MessageSquare } from 'lucide-react';

interface ConversationItemProps {
  conversation: Conversation;
  isActive?: boolean;
  onClick?: () => void;
}

export const ConversationItem: React.FC<ConversationItemProps> = ({
  conversation,
  isActive = false,
  onClick
}) => {
  const { user, lastMessage, timestamp, unread, source } = conversation;
  
  return (
    <div 
      className={cn(
        'p-4 cursor-pointer hover:bg-gray-50 transition-colors',
        isActive ? 'bg-indigo-50' : '',
        unread ? 'font-medium' : ''
      )}
      onClick={onClick}
    >
      <div className="flex items-start space-x-3">
        <div className="relative">
          {source === '3min' && (
            <span className="absolute top-0 right-0 w-3 h-3 bg-yellow-400 rounded-full z-10" />
          )}
          <Avatar 
            name={user.name} 
            src={user.avatar} 
            size="md" 
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between">
            <div className="text-sm font-medium text-gray-900">
              {user.name}{user.company && ` · ${user.company}`}
            </div>
            <div className="text-xs text-gray-500">
              {formatTimestamp(timestamp)}
            </div>
          </div>
          <div className="text-sm text-gray-500 truncate">
            {source === 'MessageSquare' && (
              <MessageSquare size={12} className="inline mr-1" />
            )}
            {truncateText(lastMessage, 30)}
          </div>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { cn, formatTimestamp } from '../lib/utils';
import { Avatar } from './Avatar';
import { Message } from '../types';
import { motion } from 'framer-motion';

interface MessageBubbleProps {
  message: Message;
  isLastInGroup?: boolean;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  isLastInGroup = false
}) => {
  const isUserMessage = message.sender === 'user';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'flex',
        isUserMessage ? '' : 'justify-end'
      )}
    >
      <div className={cn(
        'max-w-[85%] flex',
        isUserMessage ? 'items-start' : 'items-start flex-row-reverse'
      )}>
        {!isUserMessage && isLastInGroup && message.user && (
          <div className="mx-2">
            <Avatar 
              name={message.user.name} 
              src={message.user.avatar} 
              size="sm" 
            />
          </div>
        )}
        <div className={cn(
          'rounded-lg px-4 py-2 text-sm',
          isUserMessage 
            ? 'bg-gray-100 text-gray-800' 
            : 'bg-indigo-600 text-white'
        )}>
          <div>{message.content}</div>
          <div className={cn(
            'text-xs mt-1',
            isUserMessage ? 'text-gray-500' : 'text-indigo-200'
          )}>
            <span>{formatTimestamp(message.timestamp)}</span>
            {!isUserMessage && message.seen && (
              <span className="ml-2">Seen</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
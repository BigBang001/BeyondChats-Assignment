import React from 'react';
import { MoreHorizontal, Moon, X } from 'lucide-react';
import { Button } from './Button';
import { User } from '../types';

interface ConversationHeaderProps {
  user: User;
  onClose: () => void;
  onToggleTheme: () => void;
}

export const ConversationHeader: React.FC<ConversationHeaderProps> = ({
  user,
  onClose,
  onToggleTheme
}) => {
  return (
    <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
      <h2 className="text-lg font-medium text-gray-900">{user.name}</h2>
      <div className="flex items-center space-x-2">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={onToggleTheme}
        >
          <Moon size={20} />
        </Button>
        <Button 
          variant="ghost" 
          size="sm"
        >
          <MoreHorizontal size={20} />
        </Button>
        <Button 
          variant="primary" 
          size="sm"
          onClick={onClose}
        >
          <X size={16} className="mr-1" />
          Close
        </Button>
      </div>
    </div>
  );
};
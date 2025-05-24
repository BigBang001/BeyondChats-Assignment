import React, { useState } from 'react';
import { Smile, PaperclipIcon, Send } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';

interface MessageComposerProps {
  onSendMessage: (content: string) => void;
  isDarkMode?: boolean;
}

export const MessageComposer: React.FC<MessageComposerProps> = ({
  onSendMessage,
  isDarkMode = false
}) => {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };
  
  return (
    <div className={`border-t ${isDarkMode ? 'border-gray-700 bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/30' : 'border-gray-200 bg-gradient-to-br from-white via-purple-50/20 to-pink-100/30'} p-4`}>
      <div className={`flex items-center justify-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
        <span>Use ⌘K for shortcuts</span>
      </div>
      <form onSubmit={handleSubmit} className="relative">
        <div className={`flex items-center border rounded-lg overflow-hidden focus-within:ring-2 ${
          isDarkMode 
            ? 'border-gray-700 bg-gray-800/50 focus-within:ring-purple-500/50 focus-within:border-purple-500/50' 
            : 'border-gray-200 bg-white/80 focus-within:ring-purple-500/30 focus-within:border-purple-500/30'
        }`}>
          <div className="flex-1">
            <textarea
              className={`w-full py-3 px-4 resize-none focus:outline-none ${
                isDarkMode 
                  ? 'bg-transparent text-gray-200 placeholder-gray-500' 
                  : 'bg-transparent text-gray-900 placeholder-gray-400'
              }`}
              placeholder="Type your message..."
              rows={1}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
          </div>
          <div className="flex items-center px-3 space-x-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className={isDarkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-500 hover:text-purple-600'}
            >
              <Smile size={20} />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className={isDarkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-500 hover:text-purple-600'}
            >
              <PaperclipIcon size={20} />
            </Button>
            <motion.div
              whileTap={{ scale: 0.95 }}
            >
              <Button
                type="submit"
                variant="primary"
                size="sm"
                disabled={!message.trim()}
                className={`bg-gradient-to-r ${
                  isDarkMode
                    ? 'from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500'
                    : 'from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                } text-white border-0`}
              >
                <Send size={16} />
                <span className="ml-1">Send</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </form>
    </div>
  );
};
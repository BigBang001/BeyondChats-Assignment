import React from 'react';
import { Suggestion } from '../types';
import { Notebook as Robot, Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface CopilotSidebarProps {
  isOpen: boolean;
  suggestions: Suggestion[];
  onSuggestionClick: (suggestion: Suggestion) => void;
  isDarkMode?: boolean;
}

export const CopilotSidebar: React.FC<CopilotSidebarProps> = ({
  isOpen,
  suggestions,
  onSuggestionClick,
  isDarkMode = false
}) => {
  if (!isOpen) return null;
  
  return (
    <motion.div 
      className={`h-full border-l ${isDarkMode ? 'border-gray-700 bg-gradient-to-br from-gray-900 via-purple-900/30 to-pink-900/40' : 'border-gray-200 bg-gradient-to-br from-white via-purple-50/30 to-pink-100/40'} w-80 flex flex-col`}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex-1 overflow-y-auto p-4">
        <div className={`pb-4 border-b ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
          <div className="flex flex-col items-center justify-center text-center p-4">
            <motion.div 
              className={`${isDarkMode ? 'bg-gradient-to-br from-purple-800 via-purple-900 to-gray-900' : 'bg-gradient-to-br from-purple-100 via-purple-50 to-white'} p-3 rounded-full mb-2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]`}
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Robot size={24} className={isDarkMode ? 'text-purple-400' : 'text-purple-600'} />
            </motion.div>
            <h3 className={`text-xl font-semibold ${isDarkMode ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gradient-to-r from-purple-700 to-pink-600'} bg-clip-text text-transparent`}>
              Hi, I'm Fin AI Copilot
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
              Ask me anything about this conversation.
            </p>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>Suggested</h4>
          <div className="space-y-2">
            {suggestions.map((suggestion) => (
              <motion.div
                key={suggestion.id}
                className={`${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-purple-900/50 via-gray-900 to-pink-900/50 border-purple-800/20 hover:from-purple-800/50 hover:to-pink-800/50 text-gray-300' 
                    : 'bg-gradient-to-r from-purple-50/50 via-white to-pink-50/50 border-purple-100/20 hover:from-purple-100/50 hover:to-pink-100/50 text-gray-800'
                } border rounded-lg px-3 py-2 text-sm cursor-pointer hover:shadow-md transition-all duration-200`}
                onClick={() => onSuggestionClick(suggestion)}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {suggestion.text}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className={`border-t p-4 ${
        isDarkMode 
          ? 'border-gray-700/50 bg-gradient-to-t from-purple-900/30 via-purple-900/20 to-gray-900' 
          : 'border-gray-200/50 bg-gradient-to-t from-purple-50/30 via-purple-50/20 to-white'
      }`}>
        <div className="relative">
          <input
            type="text"
            className={`w-full border rounded-lg pl-3 pr-10 py-2 text-sm ${
              isDarkMode 
                ? 'border-purple-800/50 bg-gray-900/70 text-gray-200 placeholder-gray-500 focus:ring-purple-500/50 focus:border-purple-500/50' 
                : 'border-purple-100/50 bg-white/70 text-gray-800 placeholder-gray-400 focus:ring-purple-500/50 focus:border-purple-500/50'
            } backdrop-blur-sm`}
            placeholder="Ask a question..."
          />
          <motion.button 
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
              isDarkMode ? 'text-gray-500 hover:text-purple-400' : 'text-gray-400 hover:text-purple-600'
            } transition-colors duration-200`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
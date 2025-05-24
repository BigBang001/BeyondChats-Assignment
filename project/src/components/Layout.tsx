import React, { useState } from 'react';
import { ConversationList } from './ConversationList';
import { ConversationPanel } from './ConversationPanel';
import { CopilotSidebar } from './CopilotSidebar';
import { Tabs } from './Tabs';
import { Conversation, Message, Suggestion } from '../types';
import { Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  conversations: Conversation[];
  activeConversation: Conversation;
  suggestions: Suggestion[];
}

export const Layout: React.FC<LayoutProps> = ({
  conversations,
  activeConversation: initialActiveConversation,
  suggestions
}) => {
  const [activeConversation, setActiveConversation] = useState<Conversation>(initialActiveConversation);
  const [showCopilot, setShowCopilot] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('ai-copilot');
  
  const handleSelectConversation = (id: string) => {
    const conversation = conversations.find(c => c.id === id);
    if (conversation) {
      setActiveConversation(conversation);
    }
  };
  
  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: `m${Date.now()}`,
      content,
      sender: 'agent',
      timestamp: '1min',
      seen: false,
      user: {
        id: 'agent-1',
        name: 'Support Agent',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      }
    };
    
    setActiveConversation(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
  };
  
  const handleSuggestionClick = (suggestion: Suggestion) => {
    handleSendMessage(suggestion.text);
  };

  const handleToggleTheme = () => {
    setIsDarkMode(prev => !prev);
    // Update root class for global dark mode
    document.documentElement.classList.toggle('dark');
  };
  
  const tabs = [
    { id: 'ai-copilot', label: (
      <div className="flex items-center">
        <Bot size={16} className="mr-1" />
        AI Copilot
      </div>
    ) },
    { id: 'details', label: 'Details' }
  ];
  
  return (
    <div className={`h-screen flex ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <div className={`w-72 h-full ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <ConversationList 
          conversations={conversations}
          activeConversationId={activeConversation.id}
          onSelectConversation={handleSelectConversation}
          isDarkMode={isDarkMode}
        />
      </div>
      
      <div className="flex-1 h-full">
        <ConversationPanel 
          conversation={activeConversation}
          onClose={() => {/* Would handle closing the conversation */}}
          onSendMessage={handleSendMessage}
          onToggleTheme={handleToggleTheme}
          isDarkMode={isDarkMode}
        />
      </div>
      
      <div className={`border-l ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} h-full`}>
        <div className="h-full flex flex-col">
          <Tabs 
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            isDarkMode={isDarkMode}
          />
          
          <AnimatePresence>
            {activeTab === 'ai-copilot' ? (
              <CopilotSidebar 
                isOpen={showCopilot}
                suggestions={suggestions}
                onSuggestionClick={handleSuggestionClick}
                isDarkMode={isDarkMode}
              />
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`p-4 ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-900'}`}
              >
                <h3 className="font-medium mb-2">Customer Details</h3>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p><strong>Name:</strong> {activeConversation.user.name}</p>
                  {activeConversation.user.company && (
                    <p><strong>Company:</strong> {activeConversation.user.company}</p>
                  )}
                  <p><strong>First contacted:</strong> Today</p>
                  <p><strong>Conversation tags:</strong> None</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { ConversationHeader } from './ConversationHeader';
import { MessageBubble } from './MessageBubble';
import { MessageComposer } from './MessageComposer';
import { Conversation, Message } from '../types';

interface ConversationPanelProps {
  conversation: Conversation;
  onClose: () => void;
  onSendMessage: (content: string) => void;
  onToggleTheme: () => void;
  isDarkMode?: boolean;
}

export const ConversationPanel: React.FC<ConversationPanelProps> = ({
  conversation,
  onClose,
  onSendMessage,
  onToggleTheme,
  isDarkMode = false
}) => {
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [conversation.messages]);

  const isLastInGroup = (message: Message, index: number) => {
    if (index === conversation.messages.length - 1) return true;
    const nextMessage = conversation.messages[index + 1];
    return message.sender !== nextMessage.sender;
  };
  
  return (
    <div className="h-full flex flex-col">
      <ConversationHeader 
        user={conversation.user} 
        onClose={onClose} 
        onToggleTheme={onToggleTheme}
        isDarkMode={isDarkMode}
      />
      <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {conversation.messages.map((message, index) => (
          <MessageBubble 
            key={message.id} 
            message={message}
            isLastInGroup={isLastInGroup(message, index)}
            isDarkMode={isDarkMode}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <MessageComposer 
        onSendMessage={onSendMessage}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};
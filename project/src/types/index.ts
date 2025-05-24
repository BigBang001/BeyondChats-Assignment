export interface User {
  id: string;
  name: string;
  avatar?: string;
  company?: string;
  email?: string;
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent' | 'bot';
  timestamp: string;
  seen?: boolean;
  user?: User;
}

export interface Conversation {
  id: string;
  user: User;
  lastMessage: string;
  timestamp: string;
  unread?: boolean;
  tags?: string[];
  source?: string;
  messages: Message[];
}

export interface Suggestion {
  id: string;
  text: string;
  type: 'response' | 'action';
}

export interface CopilotState {
  suggestions: Suggestion[];
  isActive: boolean;
}
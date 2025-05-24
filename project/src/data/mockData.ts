import { Conversation, Suggestion } from '../types';

export const mockConversations: Conversation[] = [
  {
    id: '1',
    user: {
      id: 'luis-github',
      name: 'Luis',
      company: 'Github'
    },
    lastMessage: 'Hey! I have a questio...',
    timestamp: '45m',
    messages: [
      {
        id: 'm1',
        content: 'Hey! I have a question about your product.',
        sender: 'user',
        timestamp: '45m'
      }
    ]
  },
  {
    id: '2',
    user: {
      id: 'ivan-nike',
      name: 'Ivan',
      company: 'Nike'
    },
    lastMessage: 'Hi there, I have a qu...',
    timestamp: '30m',
    unread: true,
    messages: [
      {
        id: 'm2',
        content: 'Hi there, I have a question about my order.',
        sender: 'user',
        timestamp: '30m'
      }
    ]
  },
  {
    id: '3',
    user: {
      id: 'lead-newyork',
      name: 'Lead from New York',
    },
    lastMessage: 'Good morning, let me...',
    timestamp: '40m',
    messages: [
      {
        id: 'm3',
        content: 'Good morning, let me know how I can help with your product.',
        sender: 'user',
        timestamp: '40m'
      }
    ]
  },
  {
    id: '4',
    user: {
      id: 'booking-api',
      name: 'Booking API problems',
    },
    lastMessage: 'Bug report',
    timestamp: '45m',
    tags: ['bug', 'api'],
    messages: [
      {
        id: 'm4',
        content: 'Bug report',
        sender: 'user',
        timestamp: '45m'
      },
      {
        id: 'm5',
        content: 'Luis · Small Crafts',
        sender: 'user',
        timestamp: '45m'
      }
    ]
  },
  {
    id: '5',
    user: {
      id: 'miracle-bank',
      name: 'Miracle',
      company: 'Exemplary Bank'
    },
    lastMessage: 'Hey there, I\'m here to...',
    timestamp: '45m',
    messages: [
      {
        id: 'm6',
        content: 'Hey there, I\'m here to ask about integration options.',
        sender: 'user',
        timestamp: '45m'
      }
    ]
  },
  {
    id: '6',
    user: {
      id: 'luis-easton',
      name: 'Luis Easton',
    },
    lastMessage: 'I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you\'d be able to refund me, as it is un-opened.',
    timestamp: '1min',
    messages: [
      {
        id: 'm7',
        content: 'I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you\'d be able to refund me, as it is un-opened.',
        sender: 'user',
        timestamp: '1min'
      },
      {
        id: 'm8',
        content: 'Let me just look into this for you, Luis.',
        sender: 'agent',
        timestamp: '1min',
        seen: true,
        user: {
          id: 'agent-1',
          name: 'Support Agent',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
        }
      }
    ]
  }
];

export const mockSuggestions: Suggestion[] = [
  {
    id: 's1',
    text: 'How do I get a refund?',
    type: 'response'
  },
  {
    id: 's2',
    text: 'What is your return policy?',
    type: 'response'
  },
  {
    id: 's3',
    text: 'Can I exchange for store credit?',
    type: 'response'
  }
];

export const activeConversation = mockConversations[5]; // Luis Easton's conversation
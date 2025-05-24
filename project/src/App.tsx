import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { mockConversations, mockSuggestions, activeConversation } from './data/mockData';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent mb-4"></div>
          <h2 className="text-xl font-medium text-gray-900">Loading inbox...</h2>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Layout 
        conversations={mockConversations}
        activeConversation={activeConversation}
        suggestions={mockSuggestions}
      />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
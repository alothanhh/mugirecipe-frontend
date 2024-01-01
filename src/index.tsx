import React from 'react';
import ApplicationNavigator from './navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from './context/AuthContext';
const queryClient = new QueryClient();

export default function App() {
  // Add context API later
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <ApplicationNavigator />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

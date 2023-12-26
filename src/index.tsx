import React from "react";
import ApplicationNavigator from "./navigation";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App () {
  // Add context API later
  return (
    <QueryClientProvider client={queryClient}>
      <ApplicationNavigator />
    </QueryClientProvider>
  ); 
}
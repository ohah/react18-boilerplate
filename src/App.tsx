/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import reactLogo from 'assets/react.svg';
import './App.css';
import Tooltip from 'components/Tooltip';
import Dropdown, { DropdownData, DropdownValue } from 'components/Dropdown';
import * as Tab from 'components/Tab';
import { ToastContext, useToastInit } from 'components/toast/ToastContext';
import ToastContainer from 'components/toast/ToastContainer';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes/root';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
export const TestContext = createContext({ toast: '토스트' });

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContext.Provider value={useToastInit()}>
        <RouterProvider router={router} />
        <ToastContainer />
      </ToastContext.Provider>
    </QueryClientProvider>
  );
}

export default App;

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
import { RecoilRoot } from 'recoil';
import { createStore } from 'redux';
import rootReducer from 'store';
import { Provider } from 'react-redux';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
export const TestContext = createContext({ toast: '토스트' });

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ToastContext.Provider value={useToastInit()}>
            <RouterProvider router={router} />
            <ToastContainer />
          </ToastContext.Provider>
        </QueryClientProvider>
      </RecoilRoot>
    </Provider>
  );
}

export default App;

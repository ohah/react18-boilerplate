import React, { useState } from 'react';
import reactLogo from 'assets/react.svg';
import 'App.css';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Header from 'pages/Header';
import RecoilHeader from 'pages/recoil/Header';
import Xhr from 'pages/Xhr';
import Fetch from 'pages/Fetch';
import Axios from 'pages/Axios';
import ReactQuery from 'pages/ReactQuery';
import UseSWR from 'pages/UseSWR';
import { QueryClient, QueryClientProvider } from 'react-query';
import rootReducer from 'store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todo from 'pages/Todo';
import RecoilTodo from 'pages/recoil/Todo';
import { RecoilRoot } from 'recoil';
import Counter from 'pages/recoil/Counter';
const queryClient = new QueryClient();

const store = createStore(rootReducer);

function App() {
  return (
    <RecoilRoot>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="recoil" element={<RecoilHeader />}>
                <Route path="counter" element={<Counter />} />
                <Route path="todo" element={<RecoilTodo />} />
              </Route>
              <Route path="todo" element={<Todo />} />
              <Route path="xhr" element={<Xhr />} />
              <Route path="fetch" element={<Fetch />} />
              <Route path="axios" element={<Axios />} />
              <Route path="react-query" element={<ReactQuery />} />
              <Route path="useSWR" element={<UseSWR />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </Provider>
    </RecoilRoot>
  );
}

export default App;

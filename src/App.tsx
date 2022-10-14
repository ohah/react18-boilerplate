import React, { useState } from 'react';
import reactLogo from 'assets/react.svg';
import 'App.css';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import Profile from 'pages/Profile';
import Header from 'pages/Header';
import CssInJS from 'pages/CssInJS';
import Xhr from 'pages/Xhr';
import Fetch from 'pages/Fetch';
import Axios from 'pages/Axios';
import ReactQuery from 'pages/ReactQuery';
import UseSWR from 'pages/UseSWR';
import { QueryClient, QueryClientProvider } from 'react-query';
import rootReducer from 'store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const queryClient = new QueryClient();

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route element={<CssInJS />} />
            <Route path="xhr" element={<Xhr />} />
            <Route path="fetch" element={<Fetch />} />
            <Route path="axios" element={<Axios />} />
            <Route path="react-query" element={<ReactQuery />} />
            <Route path="useSWR" element={<UseSWR />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;

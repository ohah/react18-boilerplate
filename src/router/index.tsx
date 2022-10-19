/* eslint-disable import/prefer-default-export */
import Axios from 'pages/Axios';
import Counter from 'pages/Counter';
import Fetch from 'pages/Fetch';
import Home from 'pages/Home';
import ReactQuery from 'pages/ReactQuery';
import Root from 'pages/Root';
import UseSWR from 'pages/UseSWR';
import Xhr from 'pages/Xhr';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="count" element={<Counter />} />
      <Route path="/fetch" element={<Fetch />} />
      <Route path="/xhr" element={<Xhr />} />
      <Route path="/axios" element={<Axios />} />
      <Route path="/react-query" element={<ReactQuery />} />
      <Route path="/useSWR" element={<UseSWR />} />
    </Route>,
  ),
);

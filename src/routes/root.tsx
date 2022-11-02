/* eslint-disable import/prefer-default-export */
import { Root, About, Profile } from 'pages';
import Param from 'pages/Param';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<div> 에러!</div>}>
      <Route index element={<About />} />
      <Route path="profile" element={<Profile />} />
      <Route path="param" element={<Param />} />
      <Route path="param/:query" element={<Param />} />
      <Route path="param/:query/:page" element={<Param />} />
    </Route>,
  ),
);

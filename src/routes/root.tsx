/* eslint-disable import/prefer-default-export */
import ErrorBoundary from 'components/ErrroBoundary';
import { Root, About, Profile, Counter, Todo } from 'pages';
import API from 'pages/API';
import Param from 'pages/Param';
import { Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<div> 에러!</div>}>
      <Route index element={<Todo />} />
      <Route
        path="/todo"
        element={
          <Suspense fallback={<div>로딩</div>}>
            <ErrorBoundary fallback={<div> 에러 </div>}>
              <Todo />
            </ErrorBoundary>
          </Suspense>
        }
      />
      <Route path="profile" element={<Profile />} />
      <Route path="param" element={<Param />} />
      <Route path="param/:query" element={<Param />} />
      <Route path="param/:query/:page" element={<Param />} />
    </Route>,
  ),
);

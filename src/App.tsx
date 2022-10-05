import React, {useState} from 'react';
import reactLogo from 'assets/react.svg';
import 'App.css';
import {Routes, Route} from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import Profile from 'pages/Profile';
import Header from 'pages/Header';
import CssInJS from 'pages/CssInJS';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route element={<CssInJS />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;

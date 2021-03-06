import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Post from '../src/components/Post';
import Header from '../src/components/Header';
import NotFound from "./pages/NotFound"
import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <Header />
     <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Post />} />
    </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

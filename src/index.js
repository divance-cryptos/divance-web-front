import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Index';
import Header from '../src/components/Header';
import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <Header />
     <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

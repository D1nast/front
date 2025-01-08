import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Header from './Layout/Header.jsx';
import Footer from './Layout/Footer.jsx';
import NewsAPI from './LpComponent/News.jsx';
import LP from './LP.jsx';
import SignUp from './Signup.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route index element={<LP />}/>
        <Route path="/news" element={<NewsAPI />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

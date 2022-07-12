import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

import NightLife from './Component/nightlife/NightLife'
import Cafe from './Component/cafe/Cafe'
import Bday from './Component/bday/Bday'
import Resort from './Component/resort/Resort'
import Study from './Component/study/Study'
import EngClubs from './Component/engclubs/EngClubs'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />

      <Route path='nightlife' element={<NightLife />} />
      <Route path='cafe' element={<Cafe />} />
      <Route path='bday' element={<Bday />} />
      <Route path='resort' element={<Resort />} />
      <Route path='study' element={<Study />} />
      <Route path='engclubs' element={<EngClubs />} />
    </Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

import NightLife from './Component/first-level-pages/nightlife/NightLife'
import Cafe from './Component/first-level-pages/cafe/Cafe'
import Bday from './Component/first-level-pages/bday/Bday'
import Resort from './Component/first-level-pages/resort/Resort'
import Study from './Component/first-level-pages/study/Study'
import EngClubs from './Component/first-level-pages/engclubs/EngClubs'

import Kowloon from './Component/second-level-pages/night-life/Kowloon'
import Nikulin from './Component/second-level-pages/night-life/Nikulin';
import LateNight from './Component/second-level-pages/night-life/LateNight';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />

      <Route path='nightlife' element={<NightLife />}>
        <Route path='kowloon' element={<Kowloon />} />
        <Route path='nikulin' element={<Nikulin />} />
        <Route path='latenight' element={<LateNight />} />
      </Route>
      <Route path='cafe' element={<Cafe />} >

      </Route>
      <Route path='bday' element={<Bday />} >

      </Route>
      <Route path='resort' element={<Resort />} >

      </Route>
      <Route path='study' element={<Study />} />

      <Route path='engclubs' element={<EngClubs />} >

      </Route>
    </Routes>

  </BrowserRouter >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

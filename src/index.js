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

      <Route path='nightlife' element={<NightLife />} />
      <Route path='nightlife/kowloon' element={<Kowloon />} />
      <Route path='nightlife/nikulin' element={<Nikulin />} />
      <Route path='nightlife/latenight' element={<LateNight />} />

      <Route path='cafe' element={<Cafe />} >
        <Route path='coffeeboom' element={<Kowloon />} />
        <Route path='ziyafet' element={<Nikulin />} />
        <Route path='afanasich' element={<LateNight />} />
      </Route>

      <Route path='bday' element={<Bday />} >
        <Route path='rybamechty' element={<Kowloon />} />
        <Route path='sadu' element={<Nikulin />} />
        <Route path='manana' element={<LateNight />} />
      </Route>

      <Route path='resort' element={<Resort />} >
        <Route path='tauspa' element={<Kowloon />} />
        <Route path='eightlakes' element={<Nikulin />} />
        <Route path='office' element={<LateNight />} />
      </Route>

      <Route path='study' element={<Study />} >
        <Route path='smartpoint' element={<Kowloon />} />
        <Route path='level8' element={<Nikulin />} />
        <Route path='terra' element={<LateNight />} />
      </Route>

      <Route path='engclubs' element={<EngClubs />} >
        <Route path='americanspace' element={<Kowloon />} />
        <Route path='spasibeacoup' element={<Nikulin />} />
        <Route path='skillsacademy' element={<LateNight />} />
      </Route>

    </Routes>

  </BrowserRouter >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

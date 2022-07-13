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
import Coffeeboom from './Component/second-level-pages/ca-fe/Coffeeboom';
import Ziyafet from './Component/second-level-pages/ca-fe/Ziyafet';
import Afanasich from './Component/second-level-pages/ca-fe/Afanasich';
import Rybamechty from './Component/second-level-pages/bd-ay/Rybamechty';
import Sadu from './Component/second-level-pages/bd-ay/Sadu';
import Manana from './Component/second-level-pages/bd-ay/Manana';
import Tauspa from './Component/second-level-pages/res-ort/Tauspa';
import Eightlakes from './Component/second-level-pages/res-ort/Eightlakes';
import Office from './Component/second-level-pages/res-ort/Office';
import Smartpoint from './Component/second-level-pages/stu-dy/Smartpoint';
import Level8 from './Component/second-level-pages/stu-dy/Level8';
import Terra from './Component/second-level-pages/stu-dy/Terra';
import Americanspace from './Component/second-level-pages/eng-clubs/Americanspace';
import Spasibeacoup from './Component/second-level-pages/eng-clubs/Spasibeacoup';
import Skillsacademy from './Component/second-level-pages/eng-clubs/Skillsacademy';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />

      <Route path='nightlife' element={<NightLife />} />
      <Route path='nightlife/kowloon' element={<Kowloon />} />
      <Route path='nightlife/nikulin' element={<Nikulin />} />
      <Route path='nightlife/latenight' element={<LateNight />} />

      <Route path='cafe' element={<Cafe />} />
      <Route path='cafe/coffeeboom' element={<Coffeeboom />} />
      <Route path='cafe/ziyafet' element={<Ziyafet />} />
      <Route path='cafe/afanasich' element={<Afanasich />} />

      <Route path='bday' element={<Bday />} />
      <Route path='bday/rybamechty' element={<Rybamechty />} />
      <Route path='bday/sadu' element={<Sadu />} />
      <Route path='bday/manana' element={<Manana />} />

      <Route path='resort' element={<Resort />} />
      <Route path='resort/tauspa' element={<Tauspa />} />
      <Route path='resort/eightlakes' element={<Eightlakes />} />
      <Route path='resort/office' element={<Office />} />

      <Route path='study' element={<Study />} />
      <Route path='study/smartpoint' element={<Smartpoint />} />
      <Route path='study/level8' element={<Level8 />} />
      <Route path='study/terra' element={<Terra />} />

      <Route path='engclubs' element={<EngClubs />} />
      <Route path='engclubs/americanspace' element={<Americanspace />} />
      <Route path='engclubs/spasibeacoup' element={<Spasibeacoup />} />
      <Route path='engclubs/skillsacademy' element={<Skillsacademy />} />

    </Routes>

  </BrowserRouter >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

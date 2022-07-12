import React from 'react';
import './App.css';

import Cell from './Component/UI/Cell/Cell';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <div className='title'>
        Almaty Guideliance
      </div>

      <div className='table'>
        <div className='row'>
          <Link className='link' to="nightlife"><Cell name="nightlife">Night Life</Cell></Link>
          <Link className='link' to="cafe"><Cell name="cafe">Where to eat</Cell></Link>
          <Link className='link' to="bday"><Cell name="bday">Places for BDay</Cell></Link>
        </div>
        <div className='row'>
          <Link className='link' to="resort"><Cell name="resort">Resorts</Cell></Link>
          <Link className='link' to="study"><Cell name="library">Study</Cell></Link>
          <Link className='link' to="engclubs"><Cell name="britain">English Clubs</Cell></Link>
        </div>
      </div>
    </div >
  );
}

export default App;

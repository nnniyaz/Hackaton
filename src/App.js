import React from 'react';
import './App.css';

import Cell from './Component/UI/Cell/Cell';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NightLife from './pages/NightLife';



function App() {
  return (
    <div className="App">
      <div className='title'>
        Almaty Guideliance
      </div>

      <div className='table'>
        <div className='row'>
          <Cell name="nightlife">Night Life</Cell>
          <Cell name="cafe">Where to eat</Cell>
          <Cell name="bday">Places for BDay</Cell>
        </div>
        <div className='row'>
          <Cell name="resort">Resorts</Cell>
          <Cell name="library">Study</Cell>
          <Cell name="britain">English Clubs</Cell>
        </div>
      </div>

      {/* <Router>
        <Routes>
          <Route ><Cell name="nightlife">Night Life</Cell></Route>
        </Routes>
      </Router> */}

      {/* <Router>
        <Routes>
          <Route exact path='/nightlife' element={<NightLife />} />
        </Routes>
      </Router> */}
    </div >
  );
}

export default App;

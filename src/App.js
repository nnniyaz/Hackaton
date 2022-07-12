import './App.css';

// Images
import nightLife from './images/party.jpeg'
import cafe from './images/cafe.jpeg'
import bday from './images/bday.webp'
import resort from './images/pool.jpeg'
import library from './images/library.jpeg'
import britain from './images/uk.webp'

function App() {
  return (
    <div className="App">
      <div className='title'>
        Almaty Guideliance
      </div>

      <div className='table'>
        <div className='row'>
          <div className='cell' style={{ backgroundImage: `url(${nightLife})` }}>
            <div className='subsell'>Night Life</div>
          </div>
          <div className='cell' style={{ backgroundImage: `url(${cafe})` }}>
            <div className='subsell'>Where to eat</div>
          </div>
          <div className='cell' style={{ backgroundImage: `url(${bday})` }}>
            <div className='subsell' style={{ fontSize: '28px' }}>Places for BDay</div>
          </div>
        </div>
        <div className='row'>
          <div className='cell' style={{ backgroundImage: `url(${resort})` }}>
            <div className='subsell'>Resorts</div>
          </div>
          <div className='cell' style={{ backgroundImage: `url(${library})` }}>
            <div className='subsell' style={{ textAlign: 'center' }}>Libraries Coworkings</div>
          </div>
          <div className='cell' style={{ backgroundImage: `url(${britain})` }}>
            <div className='subsell'>English Clubs</div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;

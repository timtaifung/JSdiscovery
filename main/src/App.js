import './App.css';
import React, {useState} from 'react';

function App() {
  //state holders
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  //functions

  return (
    <div className="App">
      <div className="row App-header">
        <div className="col-12">
          <h1>Digital Playground</h1>
        </div>
      </div>
      <div className="row Card-container">
        <div className="row Card-title">
          <div className="col-12">
            <h3 className='Card-title-content'>Rows & Column</h3>
          </div>
        </div>
        <hr/>
        <div className="row Card Content">
          <div className=" col-6 Box-container-row">
            <div className=" row Box-container-minirow">
              <div className="col-4 Box-container-col red"></div>
              <div className="col-5 Box-container-col blue" ></div>
              <div className="col-2 Box-container-col green"></div>
            </div>
            <div className=" row Box-container-minirow">
              <div className="col-6 Box-container-col red"></div>
              <div className="col-5 Box-container-col blue" ></div>
            </div>
            <div className=" row Box-container-minirow">
              <div className="col-1 Box-container-col red"></div>
              <div className="col-2 Box-container-col blue" ></div>
              <div className="col-8 Box-container-col green"></div>
            </div>
          </div>
          <div className="col-5 Range-control">
            <div className="row Range-control-title">
              <h4>Range Control</h4>
            </div>
            <div className="row Range-control-row">
              <div className="col-2 Range-label">
                <label for="customRange1" className="Range-form-label">Red</label>
              </div>
              <div className="col-4 Range-control-range">
                <input type="range" min='0' max='12' className="form-range" id="customRange1"  onChange={e=>setRed(e.target.value)}/>
              </div>
              <div className="col-2">
                <p>{red}</p>
              </div>
            </div>
            <div className="row Range-control-row">
              <div className="col-2 Range-label">
                <label for="customRange1" className="Range-form-label">Blue</label>
              </div>
              <div className="col-4 Range-control-range">
                <input type="range" min='0' max='12' className="form-range" id="customRange1" onChange={e=>setBlue(e.target.value)} />
              </div>
              <div className="col-2">
                <p>{blue}</p>
              </div>
            </div>
            <div className="row Range-control-row">
              <div className="col-2 Range-label">
                <label for="customRange1" className="Range-form-label">Green</label>
              </div>
              <div className="col-4 Range-control-range">
                <input type="range" min='0' max='12'  className="form-range" id="customRange1" onChange={e=>setGreen(e.target.value)} />
              </div>
              <div className="col-2">
                <p>{green}</p>
              </div>
            </div>
            <hr/>
            <div className="row Card-text">
              <p>Rows and columns are the most basic layout element in Bootstrap. To create a basic grid layout, add a .row to an element, and then add a .col-*-* class to child elements. The number of columns you need will depend on your design.</p>
              <p>In an singular Row parameter, the maximum combination of Col-x is added up to 12</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

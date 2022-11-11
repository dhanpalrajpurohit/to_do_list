import React from 'react';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './component/sidebar/Sidebar';
import {SignIn, SignUp, Index, Profile} from './pages/index';
import {Popup} from './component/index';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/popup" element={<Popup />} />
          {/* <React.Fragment>
          <div className='row'>
            <div className='col-2'><Sidebar /></div>
            <div className='col-9'>
              <Route path="/dashboard" element={<Index />} />
            </div>
          </div>
          </React.Fragment> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

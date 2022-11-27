import React from 'react';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './component/sidebar/Sidebar';
import {SignIn, SignUp, Index, Profile, Dashboard} from './pages/index';
import {Popup} from './component/index';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          {/* <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/" element={<Index/>} />
          <Route path="/popup" element={<Popup />} /> */}
          <Route path="/todo" element={<Dashboard />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

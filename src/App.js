import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Backdrop from './Components/Navbar/Backdrop';
import Sidedrawer from './Components/Navbar/Sidedrawer';
import Toolbar from './Components/Navbar/Toolbar';
import Home from './Components/Home/Home';
import Second from './Components/Second/Second';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  function drawerToggleClickHandler(){
    setSideDrawerOpen(!sideDrawerOpen)
  }
  function backdropClickHandler(){
    setSideDrawerOpen(!sideDrawerOpen)
  }
  let backdrop;
  if(sideDrawerOpen){
    backdrop = <Backdrop click = {backdropClickHandler} />
  }
  return (
    <BrowserRouter>
      <React.Fragment>
        <Toolbar />
        <Sidedrawer />
        {backdrop}
        <Routes>
          <Route path="/main" element={<Home />} />
          <Route path="/second" element={<Second />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;

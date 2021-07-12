// External Dependencies
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// Components
import Router from './Routes/Router';
import Navbar from './Nav/Navbar';
// Styles
import '../styles/App.scss'

const App = () => {
  let theme = 'light';

  return (
    <BrowserRouter>
      <div className={`App ${theme === 'dark' ? 'dark' : ''}`} >
        <Navbar theme={theme} />
        <div className={`container ${theme === 'light' ? 'bg-primary text-light' : 'bg-dark text-light-alt'}`}>
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

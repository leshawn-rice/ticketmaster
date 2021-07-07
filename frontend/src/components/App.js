import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
// Components
import Router from './Routes/Router';
import Navbar from './Nav/Navbar';
// Styles
import '../styles/App.css'

const App = () => {
  let theme = "light"

  useEffect(() => {
    const changeScrollbar = () => {
      document.body.style.scrollbarFaceColor = 'red';
    }
    changeScrollbar();
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar theme={theme} />
        <div className={`container ${theme === 'light' ? 'bg-primary text-light' : 'bg-dark text-light-alt'}`}>
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

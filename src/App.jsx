import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import NavBar from './components/NavBar';
import Home from './pages/Home';
import Game from './pages/Game';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';

function App()
{
  return(

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path = "/" element = { <Home/> } />
        <Route path = "/games" element = { <Game/> } />
        <Route path = "/blog" element = { <Blog/> } />
        <Route path = "/about-us" element = { <AboutUs/> } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
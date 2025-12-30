import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import NavBar from './components/NavBar';
import Home from './pages/Home';
import Game from './pages/Game';
import Blog from './pages/Blog';
import Login from './pages/Login';

function App()
{
  return(

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path = "/" element = { <Home/> } />
        <Route path = "/games" element = { <Game/> } />
        <Route path = "/blog" element = { <Blog/> } />
        <Route path = "/login" element = { <Login/> } />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
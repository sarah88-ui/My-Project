import { useState } from 'react'
import Home from './pages/Home'; 
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav'
import About from './pages/About'
import Favourites from './pages/Favourites'
import Forecast from './pages/Forecast'
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Favourites' element={<Favourites/>}/>
        <Route path='/Forecast' element={<Forecast/>}/>
      </Routes>
    </>
  );
}

export default App

import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Menu from './Pages/Menu';
import Reservations from './Pages/Reservations';
import Order from './Pages/Order';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Menu" element={<Menu />}/>
          <Route path="/Reservations" element={<Reservations />}/>
          <Route path="/Order" element={<Order />}/>
          <Route path="/Login" element={<Login />}/>
        </Routes>
    </>
  );
}

export default App;

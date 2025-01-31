import React from 'react';
import './App.css';
import { signInWithGoogle } from './firebase';
import {  Routes,Route } from 'react-router-dom';
import Home from './components/home';
import Dashboard from './components/dashboard';

function App() {

  return (
  <div className='app-container'>  
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
  </div>)


 
}

export default App;
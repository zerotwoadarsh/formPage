import React from 'react';
import './App.css';
import FormPage from './components/FormPage';
import FormDisplay from './components/FormDisplay';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<FormPage />} />
      <Route path='/display' element={<FormDisplay />} />
      
    </Routes>
  );
}

export default App;

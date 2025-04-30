import React from 'react';
import './App.css';
import FormPage from './components/FormPage';
import FormDisplay from './components/FormDisplay';
import FormResult from './components/FormResult';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<FormPage />} />
      <Route path='/display' element={<FormDisplay />} />
      <Route path='/result' element={<FormResult />} />
      
    </Routes>
  );
}

export default App;

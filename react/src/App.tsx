import React from 'react';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import HeroList from './components/HeroList';
import HeroAdd from './components/HeroAdd';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HeroList />} />
        <Route path='/addHero' element={<HeroAdd />} />
      </Routes>
    </div>
  );
}

export default App;

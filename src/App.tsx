import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {NavbarComponent} from './components/navbar/index.tsx';
import { SectionComponent } from './components/section/index.tsx';
import { PagesComponent } from './components/residencial/index.tsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent/>
        <Routes>
          <Route
          path="/"
          element={<SectionComponent/>}
          />
          <Route
          path="/page/:param"
          element={<PagesComponent/>}
          />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

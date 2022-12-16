import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route /*, Link */} from 'react-router-dom';


// const HomePage = lazy(()=> import('./pages/HomePage'));
// const AboutPage = lazy(()=> import('./pages/AboutPage'));


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Suspense fallback={<h1>Loading WebPage...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          {/* <Route path="/:company" element={<HomePage/>}/> */}

          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
  
}

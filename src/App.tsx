import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  Internships,
} from './pages';
import AboutUs from './pages/aboutus/AboutUs';
import FAQ from './pages/faq/FAQ';
import { Layout } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/internship" element={<Internships />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;

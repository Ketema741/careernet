import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  Internships,
  InternshipDetail,
  Jobs,
  JobDetail,
  Blogs,
  BlogDetail,
  Register,
  Login,
  Profile,
  
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
          <Route path="/internship/:id" element={<InternshipDetail />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

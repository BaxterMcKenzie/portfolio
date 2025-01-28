import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Web from '../pages/Web';
import Design from '../pages/Design';
import Illustration from '../pages/Illustration';
import Personal from '../pages/Personal';
import Contact from '../pages/Contact';
import ProjectDetails from '../pages/ProjectDetails';

const Links = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/web" element={<Web />} />
      <Route path="/design" element={<Design />} />
      <Route path="/illustration" element={<Illustration />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/projects/:type/:projectId" element={<ProjectDetails />} />
    </Routes>
  );
};

export default Links;

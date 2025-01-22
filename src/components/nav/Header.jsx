import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  return (
    <div className='header'>
      <a href="/">
        <img className="b-logo" src="/home-img/b.svg" alt="B logo" />
      </a>
      <div className='nav-links'>
        <NavLink to="/" activeclassname="active">Home</NavLink>
        <NavLink to="/web" activeclassname="active">Web</NavLink>
        <NavLink to="/design" activeclassname="active">Design</NavLink>
        <NavLink to="/illustration" activeclassname="active">Illustration</NavLink>
        <NavLink to="/personal" activeclassname="active">Personal</NavLink>
        <NavLink to="/contact" activeclassname="active">Contact</NavLink>
      </div>
      <div className="hamburger" onClick={openModal}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <NavLink to="/" onClick={closeModal}>Home</NavLink>
            <NavLink to="/web" onClick={closeModal}>Web</NavLink>
            <NavLink to="/design" onClick={closeModal}>Design</NavLink>
            <NavLink to="/illustration" onClick={closeModal}>Illustration</NavLink>
            <NavLink to="/personal" onClick={closeModal}>Personal</NavLink>
            <NavLink to="/contact" onClick={closeModal}>Contact</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className='footer'>
      <a href="/">
        <img className="b-logo" src="/home-img/b.svg" alt="B logo" />
      </a>
      <div className='name-social-footer'>
        <p>Baxter Mckenzie</p>
        <a href="https://github.com/BaxterMcKenzie" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a href="https://www.linkedin.com/in/baxter-mckenzie-5a2201282/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/baxter_mckenzie/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
      </div>
      <p>baxmckenzie@gmail.com</p>
      <p>Copyright © 2024 Baxter McKenzie</p>
    </div>
  )
}

export default Footer

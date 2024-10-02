import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Gallery = ({ jsonFile }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch the data from the passed JSON file
    fetch(`/${jsonFile}`)
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error(error));
  }, [jsonFile]);

  return (
    <div className="gallery">
      {projects.map((project) => (
        <div className='gallery-image-container' key={project.id}>
          <Link to={`/project/${project.id}`}>
            <div className='galleryCard'>
              <div className="gallery-art" style={{ backgroundImage: `url(${project.cover_art})` }}>
                <div className='galleryContainer'>
                  <div className='galleryDetails'>
                    <h1>{project.project}</h1>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

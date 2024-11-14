import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gallery = ({ jsonFile, cardBackground, type }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`/${jsonFile}`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, [jsonFile]);

  return (
    <div className="gallery">
      {projects.map((project) => (
        <div className="gallery-image-container" key={project.id}>
          <Link to={`/projects/${type}/${project.id}`}>
            <div
              className="galleryCard"
              style={cardBackground ? { backgroundImage: `url(${cardBackground})` } : {}}
            >
              <div className="gallery-art" style={{ backgroundImage: `url(${project.cover_art})` }}>
                <div className="galleryContainer">
                  <div className="galleryDetails">
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

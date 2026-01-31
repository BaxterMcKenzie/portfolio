import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeGallery = () => {
  const [highlightedProjects, setHighlightedProjects] = useState([]);

  // JSON files and the specific project ID you want to highlight
  const jsonFiles = [
    {
      file: "DESIGN.json",
      type: "design",
      id: "bewk-club-design",
      cardBackground: "/home-img/gallery-card-design.webp",
    },
    {
      file: "DESIGN.json",
      type: "design",
      id: "poster-design-2",
      cardBackground: "/home-img/gallery-card-design.webp",
    },
    {
      file: "DESIGN.json",
      type: "design",
      id: "wedding",
      cardBackground: "/home-img/gallery-card-design.webp",
    },
    { file: "WEB.json", 
      type: "web", 
      id: "keene-krib" 
    },
    { file: "WEB.json", 
      type: "web", 
      id: "tipu-garden-management" 
    },
    { file: "ILLUSTRATION.json", 
      type: "illustration", 
      id: "inktober-2025" 
    }
  ];

  // Define background images for each type
  const cardBackgrounds = {
    design: "/home-img/gallery-card-design.webp",
    illustration: "/home-img/gallery-card-illustration.webp",
    web: "/home-img/gallery-card-web.webp",
  };

  useEffect(() => {
    const fetchHighlightedProjects = async () => {
      const fetchedProjects = await Promise.all(
        jsonFiles.map(async ({ file, type, id }) => {
          try {
            const response = await fetch(`/${file}`);
            const data = await response.json();
            const project = data.find((item) => item.id === id);
            return project ? { ...project, type } : null;
          } catch (error) {
            console.error(`Error fetching ${file}:`, error);
            return null;
          }
        })
      );

      // Remove null values (in case some projects are not found)
      setHighlightedProjects(fetchedProjects.filter(Boolean));
    };

    fetchHighlightedProjects();
  }, []);

  return (
    <div className="home-highlight-gallery">
      {highlightedProjects.map((project) => (
        <div className="gallery-image-container" key={project.id}>
          <Link to={`/projects/${project.type}/${project.id}`}>
            <div
              className="galleryCard"
              style={{
                backgroundImage: `url(${cardBackgrounds[project.type]})`,
              }}
            >
              <div
                className="gallery-art"
                style={{ backgroundImage: `url(${project.cover_art})` }}
              >
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

export default HomeGallery;

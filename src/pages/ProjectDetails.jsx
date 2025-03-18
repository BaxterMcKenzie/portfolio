import React from "react";
import { useParams } from "react-router-dom";
import ProjectDetailsHeader from "../components/ProjectDetailsHeader";

const ProjectDetails = () => {
  const { projectId, type } = useParams();
  const [project, setProject] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  React.useEffect(() => {
    let jsonFile;
    switch (type) {
      case "design":
        jsonFile = "/DESIGN.json";
        break;
      case "web":
        jsonFile = "/WEB.json";
        break;
      case "illustration":
        jsonFile = "/ILLUSTRATION.json";
        break;
      case "personal":
        jsonFile = "/PERSONAL.json";
        break;
      default:
        console.error("Invalid type provided");
        return;
    }

    console.log("Fetching data from:", jsonFile); // Debugging log

    fetch(jsonFile)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Debugging log
        const foundProject = data.find((proj) => proj.id === projectId);
        console.log("Found project:", foundProject); // Debugging log
        setProject(foundProject);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the project data:", error);
        setLoading(false);
      });
  }, [projectId, type]);

  if (loading) return <div>Loading...</div>;
  if (!project) return <div>Project not found.</div>;

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const renderSection = (description, mockups, key) => {
    if (!description && (!mockups || mockups.length === 0)) return null;

    const isAlphabetArt = projectId === "alphabet-art";

    return (
      <div
        className={`project-details-container ${isAlphabetArt ? "grid-3" : ""}`}
        key={key}
      >
        {description && (
          <div className="project-multi-container-background">
            <div className="project-multi-container">
              <div className="project-description-multi">
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
              </div>
            </div>
          </div>
        )}
        {mockups && mockups.length > 0 && (
          <div className={`mockup-container ${isAlphabetArt ? "grid-3" : ""}`}>
            {mockups.map((mockup, index) => (
              <img
                key={index}
                src={mockup}
                alt={`Mockup ${index + 1}`}
                onClick={() => openModal(mockup)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderYearSection = (year, displayImage, key) => {
    if (!year && (!displayImage || displayImage.length === 0)) return null;

    const isInktober = projectId === "inktober"; // Check if it's Inktober

    return (
      <div
        className={`project-details-container ${isInktober ? "grid-3" : ""}`}
        key={key}
      >
        <h2>{year}</h2>
        {displayImage && displayImage.length > 0 && (
          <div className={`mockup-container ${isInktober ? "grid-3" : ""}`}>
            {displayImage.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                onClick={() => openModal(image)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="project-details-container">
      <ProjectDetailsHeader title={project.project} />
      <div className="project-details-main-img-description">
        <img
          className="project-main-img"
          src={project.cover_art}
          alt={project.project}
        />
        <div className="project-description">
          <h2>Project Details //</h2>
          <br />
          <h3>{project.about}</h3>
          <br />
          <p dangerouslySetInnerHTML={{ __html: project.description }} />
          <br />
          <p className="role-tools">
            <strong>Role:</strong> {project.role}
          </p>
          <p className="role-tools">
            <strong>Tools:</strong> {project.tools}
          </p>
          <br />
          <div className="button-holder">
            {project.site_link && (
              <a
                href={project.site_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </a>
            )}
            {project.git_repo && (
              <a
                href={project.git_repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Git Repo
              </a>
            )}
            {project.git_repo2 && (
              <a
                href={project.git_repo2}
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend Git Repo
              </a>
            )}
          </div>
        </div>
      </div>

      {renderSection(null, project.mockups, "main-mockups")}
      {renderSection(project.description2, project.mockups2, "section2")}
      {renderSection(project.description3, project.mockups3, "section3")}
      {renderSection(project.description4, project.mockups4, "section4")}
      {renderSection(project.description5, project.mockups5, "section5")}
      {renderSection(project.description6, project.mockups6, "section6")}
      {renderSection(project.description7, project.mockups7, "section7")}
      {renderSection(project.description8, project.mockups8, "section8")}
      {renderSection(project.description9, project.mockups9, "section9")}
      {renderSection(project.description10, project.mockups10, "section10")}

      {/* Conditional Year Sections */}
      {renderYearSection(project.year2, project.displayImage2, "year-section2")}
      {renderYearSection(project.year3, project.displayImage3, "year-section3")}
      {renderYearSection(project.year4, project.displayImage4, "year-section4")}
      {renderYearSection(project.year5, project.displayImage5, "year-section5")}
      {renderYearSection(project.year6, project.displayImage6, "year-section6")}

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <button
              className="modal-close-button"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              &times;
            </button>
            <img src={selectedImage} alt="Full view" />
          </div>
        </div>
      )}

      <div className="margin"></div>
    </div>
  );
};

export default ProjectDetails;

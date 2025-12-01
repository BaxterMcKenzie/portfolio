import React from "react";
import { useParams } from "react-router-dom";
import ProjectDetailsHeader from "../components/ProjectDetailsHeader";

const ProjectDetails = () => {
  const { projectId, type } = useParams();
  const [project, setProject] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  // MODAL STATES
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedMedia, setSelectedMedia] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [selectedArray, setSelectedArray] = React.useState(null); // <-- IMPORTANT

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

    fetch(jsonFile)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        const foundProject = data.find((proj) => proj.id === projectId);
        setProject(foundProject);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
        setLoading(false);
      });
  }, [projectId, type]);

  if (loading) return <div>Loading...</div>;
  if (!project) return <div>Project not found.</div>;

  // OPEN MODAL WITH ARRAY + INDEX
  const openModal = (media, index, array) => {
    setSelectedMedia(media);
    setSelectedIndex(index);
    setSelectedArray(array); // <-- store array
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
    setSelectedIndex(null);
    setSelectedArray(null);
  };

  // NEXT + PREV NOW USE THE CORRECT ARRAY
  const handleNext = () => {
    if (!selectedArray) return;

    const newIndex = (selectedIndex + 1) % selectedArray.length;
    setSelectedIndex(newIndex);
    setSelectedMedia(selectedArray[newIndex]);
  };

  const handlePrev = () => {
    if (!selectedArray) return;

    const newIndex =
      (selectedIndex - 1 + selectedArray.length) % selectedArray.length;

    setSelectedIndex(newIndex);
    setSelectedMedia(selectedArray[newIndex]);
  };

  // UNIVERSAL SECTION RENDERER
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
                <p dangerousSetInnerHTML={{ __html: description }}></p>
              </div>
            </div>
          </div>
        )}

        {mockups && mockups.length > 0 && (
          <div className={`mockup-container ${isAlphabetArt ? "grid-3" : ""}`}>
            {mockups.map((mockup, index) => {
              const isVideo = mockup.endsWith(".mp4");

              return isVideo ? (
                <video
                  key={index}
                  src={mockup}
                  muted
                  playsInline
                  className="mockup-video"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                  // Pass the ARRAY!
                  onClick={() => openModal(mockup, index, mockups)}
                />
              ) : (
                <img
                  key={index}
                  src={mockup}
                  alt={`Mockup ${index + 1}`}
                  onClick={() => openModal(mockup, index, mockups)} // <-- FIX
                  style={{ cursor: "pointer" }}
                  loading="lazy"
                />
              );
            })}
          </div>
        )}
      </div>
    );
  };

  // YEAR SECTIONS (INKTOBER ETC.)
  const renderYearSection = (year, displayImage, key) => {
    if (!year && (!displayImage || displayImage.length === 0)) return null;

    const isInktober = projectId === "inktober";

    return (
      <div
        className={`project-details-container ${isInktober ? "grid-3" : ""}`}
        key={key}
      >
        <h2>{year}</h2>

        {displayImage && displayImage.length > 0 && (
          <div className={`mockup-container ${isInktober ? "grid-3" : ""}`}>
            {displayImage.map((image, index) => {
              const isVideo = image.endsWith(".mp4");

              return isVideo ? (
                <video
                  key={index}
                  src={image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="mockup-video"
                />
              ) : (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  onClick={() => openModal(image, index, displayImage)} // <-- FIX
                  style={{ cursor: "pointer" }}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="project-details-container">
      <ProjectDetailsHeader title={project.project} />

      {/* HEADER SECTION */}
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
              <a href={project.site_link} target="_blank">
                Visit Site
              </a>
            )}
            {project.git_repo && (
              <a href={project.git_repo} target="_blank">
                Git Repo
              </a>
            )}
            {project.git_repo2 && (
              <a href={project.git_repo2} target="_blank">
                Backend Repo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* MAIN MOCKUP SECTIONS */}
      {renderSection(null, project.mockups, "main")}
      {renderSection(project.description2, project.mockups2, "sec2")}
      {renderSection(project.description3, project.mockups3, "sec3")}
      {renderSection(project.description4, project.mockups4, "sec4")}
      {renderSection(project.description5, project.mockups5, "sec5")}
      {renderSection(project.description6, project.mockups6, "sec6")}
      {renderSection(project.description7, project.mockups7, "sec7")}
      {renderSection(project.description8, project.mockups8, "sec8")}
      {renderSection(project.description9, project.mockups9, "sec9")}
      {renderSection(project.description10, project.mockups10, "sec10")}

      {/* YEAR SECTIONS */}
      {renderYearSection(project.year2, project.displayImage2, "year2")}
      {renderYearSection(project.year3, project.displayImage3, "year3")}
      {renderYearSection(project.year4, project.displayImage4, "year4")}
      {renderYearSection(project.year5, project.displayImage5, "year5")}
      {renderYearSection(project.year6, project.displayImage6, "year6")}

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-button" onClick={closeModal}>
              &times;
            </button>

            <button className="modal-arrow left" onClick={handlePrev}>
              ‹
            </button>

            {selectedMedia.endsWith(".mp4") ? (
              <video
                src={selectedMedia}
                controls
                autoPlay
                loop
                className="modal-video"
              />
            ) : (
              <img src={selectedMedia} alt="Full view" />
            )}

            <button className="modal-arrow right" onClick={handleNext}>
              ›
            </button>
          </div>
        </div>
      )}

      <div className="margin"></div>
    </div>
  );
};

export default ProjectDetails;

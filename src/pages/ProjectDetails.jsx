import React from "react";
import { useParams } from "react-router-dom";
import ProjectDetailsHeader from "../components/ProjectDetailsHeader";

const ProjectDetails = () => {
  const { projectId, type } = useParams(); // Get both projectId and type from the URL
  const [project, setProject] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Determine the correct JSON file based on the type
    const jsonFile = type === "design" ? "/DESIGN.json" : "/WEB.json";

    fetch(jsonFile)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const foundProject = data.find((proj) => proj.id === projectId);
        setProject(foundProject);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the project data:", error);
        setLoading(false);
      });
  }, [projectId, type]); // Add `type` to dependencies to refetch if type changes

  if (loading) return <div>Loading...</div>;
  if (!project) return <div>Project not found.</div>;

  const renderSection = (description, mockups, key) => {
    // Skip rendering if description and mockups are both missing
    if (!description && (!mockups || mockups.length === 0)) return null;

    return (
      <div className="project-details-container" key={key}>
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
          <div className="mockup-container">
            {mockups.map((mockup, index) => (
              <img key={index} src={mockup} alt={`Mockup ${index + 1}`} />
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
          <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
          <br />
          <p className="role-tools">
            <strong>Role:</strong> {project.role}
          </p>
          <p className="role-tools">
            <strong>Tools:</strong> {project.tools}
          </p>
          <br />
          <div className="button-holder">
            {/* Conditionally render Visit Site button */}
            {project.site_link && (
              <a
                href={project.site_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </a>
            )}
            {/* Conditionally render Git Repo button */}
            {project.git_repo && (
              <a
                href={project.git_repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Git Repo
              </a>
            )}
            {/* Conditionally render Backend Git Repo button */}
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

      <div className="margin"></div>
    </div>
  );
};

export default ProjectDetails;

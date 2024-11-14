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

  return (
    <div className="project-details-container">
      <ProjectDetailsHeader title={project.project} />
      <div className="project-details-main-img-description">
        <img className="project-main-img" src={project.cover_art} alt={project.project} />
        <div className="project-description">
          <h2>Project Details //</h2><br />
          <h3>{project.about}</h3><br />
          <p>{project.description}</p><br />
          <p className="role-tools"><strong>Role:</strong> {project.role}</p>
          <p className="role-tools"><strong>Tools:</strong> {project.tools}</p><br />
          <a href={project.site_link} target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
      </div>
      <div className="mockup-container">
        {project.mockups.map((mockup, index) => (
          <img key={index} src={mockup} alt={`Mockup ${index + 1}`} />
        ))}
      </div>
      <div className="margin"></div>
    </div>
  );
};

export default ProjectDetails;

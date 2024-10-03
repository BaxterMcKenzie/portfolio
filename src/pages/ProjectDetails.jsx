import React from "react";
import { useParams } from "react-router-dom";

import ProjectDetailsHeader from "../components/ProjectDetailsHeader";

const ProjectDetails = () => {
  const { projectId } = useParams(); // Get projectId from the URL
  const [project, setProject] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('/WEB.json') // Adjust the path to match your JSON file if necessary
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        // Find the project by its `id`
        const foundProject = data.find((proj) => proj.id === projectId);

        setProject(foundProject);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching the project data:", error);
        setLoading(false);
      });
  }, [projectId]);

  if (loading) return <div>Loading...</div>;

  if (!project) return <div>Project not found.</div>;

  return (
    <div className="project-details-container">
      <ProjectDetailsHeader title={project.project}/>
      <div className="project-details-main-img-desription">
        <img className="project-main-img" src={project.cover_art} alt={project.project} />
        <div className="project-descrpition">
          <h2>Project Details //</h2><br/>
          <h3>{project.about}</h3><br/>
          <p>{project.description}</p><br/>
          <p className="role-tools">Role: {project.role}</p>
          <p className="role-tools">Tools: {project.tools}</p><br/>
          <a href={project.site_link} target="_blank" rel="noopener noreferrer">Visit Site</a>
        </div>
      </div>
      <div className="mockup-container">
        {project.mockups.map((mockup, index) => (
          <img key={index} src={mockup} alt={`Mockup ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;

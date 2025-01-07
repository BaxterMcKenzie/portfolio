import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ProjectDetailsHeader = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="project-details-header">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h1>{title}</h1>
    </div>
  );
};

export default ProjectDetailsHeader;

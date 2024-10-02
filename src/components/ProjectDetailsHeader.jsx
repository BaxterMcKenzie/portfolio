import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectDetailsHeader = ({title, image_url}) => {
    const navigate = useNavigate();

  return (
    <div className='project-details-header'>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <h1>{title}</h1>
    </div>
  )
}

export default ProjectDetailsHeader
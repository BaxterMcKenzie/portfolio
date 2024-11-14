import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageHeader = ({title, image_url}) => {
    const navigate = useNavigate();

  return (
    <div className='page-header'style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${image_url})`}}>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <h1>{title}</h1>
    </div>
  )
}

export default PageHeader

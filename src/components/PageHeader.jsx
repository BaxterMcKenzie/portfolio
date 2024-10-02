import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageHeader = ({title, image_url}) => {
    const navigate = useNavigate();

  return (
    <div className='page-header'>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <h1>{title}</h1>
    </div>
  )
}

export default PageHeader

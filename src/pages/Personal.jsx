import React from 'react'
import PageHeader from '../components/PageHeader'
import Gallery from "../components/Gallery";

const Personal = () => {
  return (
<>
<PageHeader
  title="Personal"
  image_url="/home-img/title-banner-personal.webp"
/>
<div className="gallery-container">
  <Gallery
    jsonFile="PERSONAL.json"
    cardBackground="/home-img/gallery-card-personal.webp"
    type="personal"
  />
</div>
</>
  )
}

export default Personal

import React from 'react';
import PageHeader from '../components/PageHeader';
import Gallery from '../components/Gallery';

const Design = () => {
  return (
    <>
      <PageHeader title="Visual Deisgn" image_url='/home-img/title-banner-design.webp' />
      <div className='gallery-container'>
        <Gallery jsonFile="DESIGN.json" cardBackground="/home-img/gallery-card-design.webp" type="design" />
      </div>
    </>
  );
};

export default Design;

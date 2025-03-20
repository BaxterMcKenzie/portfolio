import React from 'react';
import PageHeader from '../components/PageHeader';
import Gallery from '../components/Gallery';

const Web = () => {
  return (
    <>
      <PageHeader title="Web/UX" image_url='/home-img/title-banner-web.webp' />
      <div className='gallery-container'>
        <Gallery jsonFile="WEB.json" cardBackground="/home-img/gallery-card-web.webp" type="web" />
      </div>
    </>
  );
};

export default Web;

import React from 'react';
import Gallery from '../components/Gallery';
import PageHeader from '../components/PageHeader';

const Web = () => {
  return (
    <>
      <PageHeader title="Web" />
      <div className='gallery-container'>
        <Gallery jsonFile="WEB.json" />
      </div>
    </>
  );
};

export default Web;

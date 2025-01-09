import React from "react";
import PageHeader from "../components/PageHeader";
import Gallery from "../components/Gallery";

const Illustration = () => {
  return (
    <>
      <PageHeader
        title="Illustration"
        image_url="/home-img/title-banner-illustration.webp"
      />
      <div className="gallery-container">
        <Gallery
          jsonFile="ILLUSTRATION.json"
          cardBackground="/home-img/gallery-card-illustration.webp"
          type="illustration"
        />
      </div>
    </>
  );
};

export default Illustration;

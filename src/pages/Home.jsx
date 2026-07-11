import React, { useRef } from "react";
import AnimatedText from "../animation/AnimatedText";
import HomeGallery from "../components/HomeGallery";

const Home = () => {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="home">
      <div className="background-image">
        <img src="/home-img/home-background-01.webp" alt="" />
      </div>

      <div className="home-body-container">
        <div className="name">
          <img
            className="baxter"
            src="/home-img/name.svg"
            alt="Baxter McKenzie"
          />
          <AnimatedText />
        </div>

        <button
          className="scroll-indicator"
          onClick={scrollToProjects}
          aria-label="Scroll to featured projects"
        >
          <div className="tube">
            <span className="circle"></span>
          </div>
        </button>
      </div>

      <div className="home-about-gallery" ref={projectsRef}>
        <HomeGallery />
      </div>
    </div>
  );
};

export default Home;
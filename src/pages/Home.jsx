import React from "react";
import AnimatedText from "../animation/AnimatedText";
import HomeGallery from "../components/HomeGallery";

const Home = () => {
  return (
    <div className="home">
      <div className="home-body-container">
        <div className="background-image">
          <img src="/home-img/home-background-01.webp" alt="" />
        </div>
        <div className="name">
          <img className="baxter" src="/home-img/name.svg" alt="Name Image" />
          <AnimatedText />
        </div>
      </div>

      <div className="home-about-gallery">
        <div className="about-home">
          <h2>Kia Ora!</h2>
          <p>
            I’m a graphic designer with 7 years of experience, blending my love
            for typography, illustration, and web design. Inspired by video
            games, film, and music, I craft visually engaging experiences that
            merge creativity with function.
            <br />
            <br />
            Recently, I dove into web UI/UX, expanding my skills from frontend
            to backend— a journey that’s fueled my passion for problem-solving
            and design.
            <br />
            <br />
            Get in touch if you’d like to create something together!
          </p>
        </div>
        <HomeGallery />
      </div>
    </div>
  );
};

export default Home;

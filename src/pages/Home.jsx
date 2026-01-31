import React from "react";
import AnimatedText from "../animation/AnimatedText";
import HomeGallery from "../components/HomeGallery";

const Home = () => {
  return (
    <div className="home">
      <div className="background-image">
        <img src="/home-img/home-background-01.webp" alt="" />
      </div>
      <div className="home-body-container">
        <div className="name">
          <img className="baxter" src="/home-img/name.svg" alt="Name Image" />
          <AnimatedText />
        </div>
        <div className="scroll-indicator">
          <div className="tube">
            <span className="circle"></span>
          </div>
        </div>
      </div>

      <div className="home-about-gallery">
        <div className="about-home">
          <h2>Kia Ora!</h2>
          <p>
            I’m a graphic designer with eight years of industry experience,
            working across branding, illustration, apparel graphics and print. I
            enjoy creating work that feels clean, thoughtful and well crafted,
            with a strong focus on clarity, detail and good design fundamentals.
            <br />
            <br />
            My background is firmly rooted in graphic design, but over the past
            few years I’ve expanded into web UI and UX, along with front end and
            some backend development. I’m front end focused and enjoy turning
            ideas into clear, intuitive interfaces, while also understanding the
            broader technical process behind them.
            <br />
            <br />
            I enjoy collaborating, bouncing ideas around and working through
            problems as a team to find the best solution. My work spans both
            digital and print, using tools like Photoshop, Illustrator,
            InDesign, Procreate, Figma, HTML, CSS, JavaScript and React.
            <br />
            <br />
            Outside of work I’m pretty relaxed. I love video games, movies,
            music and cooking, and those interests often feed back into how I
            think about design, storytelling and visual composition.
            <br />
            <br />
            Always keen to chat, so feel free to get in touch.
          </p>
        </div>
        <HomeGallery />
      </div>
    </div>
  );
};

export default Home;

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
            I’m a graphic designer with seven years of experience working across
            branding, illustration, apparel graphics and print. I like creating
            work that feels clean, thoughtful and well crafted, and I enjoy the
            mix of creativity and problem solving that comes with every project.
            <br />
            <br />
            My background is mainly in graphic design, but I’ve also expanded
            into web UI and UX, along with front end and some backend
            development. I’m front end focused and enjoy turning ideas into
            clear, easy to use interfaces, but I also like understanding the
            full process and how everything fits together behind the scenes.
            <br />
            <br />
            I enjoy collaborating, bouncing ideas around and finding the best
            solution as a team. I work across digital and print using tools like
            Photoshop, Illustrator, InDesign, Procreate, Figma, HTML, CSS,
            JavaScript and React.
            <br />
            <br />
            Outside of work I’m pretty relaxed. I love video games, movies,
            music and cooking, and all of that keeps me inspired and influences
            how I think about design and storytelling.
            <br />
            <br />
            Always keen to chat, so feel free to get in touch!
          </p>
        </div>
        <HomeGallery />
      </div>
    </div>
  );
};

export default Home;

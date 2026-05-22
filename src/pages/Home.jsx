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
          <h2>Heyo!</h2>
          <br />
          <br />
          <p>
            Hey, I’m Baxter! I’m a multidisciplinary Graphic Designer based in
            Aotearoa New Zealand with over eight years of industry experience
            working across branding, apparel graphics, illustration, print, and
            digital design.
            <br />
            <br />
            My professional background is heavily rooted in graphic design and
            print, but over the past few years I’ve expanded into web UI/UX and
            front-end development. I enjoy creating clean, intuitive digital
            experiences while still bringing strong visual design, personality,
            and attention to detail into everything I make.
            <br />
            <br />
            Although a big part of my background is rooted in apparel graphics
            and print, the work itself goes far beyond just designing for
            t-shirts. It’s given me a strong foundation in typography, layout,
            illustration, branding, production, and visual problem solving
            across a huge range of styles and industries.
            <br />
            <br />
            I’ve always loved typography, bold visuals, and pop culture. Growing
            up in the 90s, things like Cartoon Network, PlayStation and Nintendo
            games, horror movies, music, and old-school print design had a huge
            influence on how I approach creativity and visual storytelling
            today. A bit weird and experimental, but always intentional.
            <br />
            <br />
            I enjoy collaborating with others, bouncing ideas around, and
            working through problems as a team to create the best outcome
            possible. Whether it’s print, apparel, branding, or digital work, I
            genuinely love the process of making ideas come to life.
            <br />
            <br />
            If you’ve got a project, brand, or idea you need help bringing to
            life, feel free to get in touch.
          </p>
        </div>
        <HomeGallery />
      </div>
    </div>
  );
};

export default Home;

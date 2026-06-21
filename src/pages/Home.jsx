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
          <p>
            Hey, I’m Baxter! I’m a multidisciplinary Graphic Designer based in
            Aotearoa New Zealand with over eight years of industry experience
            across branding, apparel graphics, illustration, print, and digital
            design.
            <br />
            <br />
            Most of my career has been spent working in graphic design and
            print, creating everything from apparel graphics and branding
            through to marketing materials and large-format artwork. That
            hands-on production experience has given me a strong foundation in
            typography, layout, illustration, branding, and visual problem solving,
            while teaching me the importance of getting the details right from
            concept through to final output.
            <br />
            <br />
            Over the past few years, I’ve expanded into web UI/UX and front-end
            development, combining my design background with digital problem
            solving. I enjoy creating clean, intuitive user experiences while
            bringing the same visual thinking and attention to detail that have
            shaped my work in print.
            <br />
            <br />
            I’ve always loved typography, bold visuals, and pop culture. Growing
            up in the 90s, things like Cartoon Network, PlayStation and Nintendo
            games, horror movies, music, and old-school print design had a huge
            influence on how I approach creativity and visual storytelling
            today. A bit weird and experimental, but always intentional.
            <br />
            <br />
            One of the things I enjoy most about design is collaboration. I love
            bouncing ideas around, working through challenges as a team, and
            helping turn rough concepts into something tangible. Whether it’s
            print, branding, apparel, or digital work, I genuinely enjoy the
            process of bringing ideas to life.
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

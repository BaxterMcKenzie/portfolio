import React from "react";
import PageHeader from "../components/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="home">
        <div className="about-body-container">
          <div className="about-background-image"></div>

          <div className="about">
            <h2>Heyo!</h2>

            <p>
              I’m Baxter, a multidisciplinary Graphic Designer based in Aotearoa
              New Zealand with over eight years of industry experience across
              branding, apparel graphics, illustration, print, and digital
              design.
              <br />
              <br />
              Most of my career has been spent working in graphic design and
              print, creating everything from apparel graphics and branding
              through to marketing materials and large-format artwork. That
              hands-on production experience has given me a strong foundation in
              typography, layout, illustration, branding, and visual problem
              solving, while teaching me the importance of getting the details
              right from concept through to final output.
              <br />
              <br />
              Over the past few years, I’ve expanded into web UI/UX and
              front-end development, combining my design background with digital
              problem solving. I enjoy creating clean, intuitive user
              experiences while bringing the same visual thinking and attention
              to detail that have shaped my work in print.
              <br />
              <br />
              I’ve always loved typography, bold visuals, and pop culture.
              Growing up in the 90s, things like Cartoon Network, PlayStation
              and Nintendo games, horror movies, music, and old-school print
              design had a huge influence on how I approach creativity and
              visual storytelling today. A bit weird and experimental, but
              always intentional.
              <br />
              <br />
              One of the things I enjoy most about design is collaboration. I
              love bouncing ideas around, working through challenges as a team,
              and helping turn rough concepts into something tangible. Whether
              it’s print, branding, apparel, or digital work, I genuinely enjoy
              the process of bringing ideas to life.
            </p>

            <div
              className="contact-div"
              style={{ textAlign: "left", padding: "0px" }}
            >
              <br />
              <br />

              <h2>Let's Chat</h2>

              <p style={{ margin: "10px 0" }}>
                If you've got a project, brand, or idea you'd like to bring to
                life, I'd love to hear from you.
              </p>

              <p style={{ margin: "10px 0" }}>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:0273008243"
                  style={{ textDecoration: "none", color: "#333" }}
                >
                  027 300 8243
                </a>
              </p>

              <p style={{ margin: "10px 0" }}>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:baxmckenzie@gmail.com"
                  style={{ textDecoration: "none", color: "#007BFF" }}
                >
                  baxmckenzie@gmail.com
                </a>
              </p>

              <div className="social-links">
                <a
                  href="https://github.com/BaxterMcKenzie"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                  href="https://www.linkedin.com/in/baxter-mckenzie-5a2201282/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                  href="https://www.instagram.com/baxter.design/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

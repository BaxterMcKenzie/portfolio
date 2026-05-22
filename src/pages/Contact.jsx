import React from "react";
import PageHeader from "../components/PageHeader";

const Contact = () => {
  return (
    <>
      <PageHeader
        title="Contact"
        image_url="/home-img/title-banner-personal.webp"
      />
      <div className="home">
        <div className="about-body-container">
          <div className="about-background-image"></div>
          <div className="about">
            <p>
              Hey! I’m Baxter, a multidisciplinary Graphic Designer based in
              Aotearoa New Zealand with over eight years of industry experience
              across branding, apparel graphics, illustration, print, and
              digital design.
              <br />
              <br />
              I love typography, bold visuals, and creating work with
              personality. My background in print and apparel design has given
              me a strong foundation in layout, branding, illustration, and
              visual problem solving across a wide range of styles and
              industries.
              <br />
              <br />
              Over the past few years I’ve also expanded into web UI/UX and
              front-end development, combining creative thinking with clean,
              functional design solutions.
              <br />
              <br />
              If you’ve got a project, brand, or idea you need help bringing to
              life, feel free to get in touch below.
              <br />
              <br />
            </p>
            <div
              className="contact-div"
              style={{ textAlign: "left", padding: "0px" }}
            >
              <h2>Contact Me</h2>
              <p style={{ margin: "10px 0" }}>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel: 027 300 8243"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

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
              I’m a graphic designer with eight years of industry experience,
              with a strong focus on typography, illustration and visual
              storytelling. I enjoy working across branding, print and digital,
              and I care a lot about detail, consistency and craft in everything
              I make.
              <br />
              <br />
              Alongside my graphic design background, I’ve upskilled in web UI
              and UX, with a front end focus and a growing understanding of
              backend development. I enjoy the problem solving side of web
              design, and finding the balance between creative ideas and clear,
              functional solutions.
              <br />
              <br />
              If you’re looking for someone who can bring both creative and
              technical thinking to your next project, I’d love to hear from
              you. Get in touch below and let’s make something great together.
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

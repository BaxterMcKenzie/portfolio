import React from "react";
import PageHeader from "../components/PageHeader";

const Contact = () => {
  return (
    <>
      <PageHeader title="Contact" image_url="/home-img/title-banner-web.webp" />
      <div className="home">
        <div className="home-body-container">
          <div className="background-image"></div>
          <div className="about">
            <p>
              I’m a graphic designer with 7 years of experience, driven by a
              passion for typography and illustration. Earlier this year, I took
              the leap into upskilling in web UI/UX, and it’s been an incredible
              journey! Designing websites, experimenting with typography, and
              weaving in color has allowed me to merge my creative background
              with structured design seamlessly.
              <br />
              <br />
              While I initially focused on frontend development, I’ve discovered
              a new appreciation for backend work—it’s been an exciting
              challenge that pushes me to problem-solve and expand my skill set
              even further.
              <br />
              <br />
              If you’re looking for someone who can bring creative and technical
              expertise to your next project, I’d love to hear from you! Get in
              touch below, and let’s create something amazing together.
              <br />
              <br />
            </p>
            <div
              className="contact-div"
              style={{ textAlign: "left", padding: "20px" }}
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

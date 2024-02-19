import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section id="about" className="aboutus">
      <div className="aboutusPic" id="aboutus_img">
        <div
          style={{
            backgroundImage: `url(https://miro.medium.com/v2/resize:fit:679/1*AfjgDZ8P17ve04p5qbVGFg.jpeg)`,
          }}
        ></div>
      </div>
      <div className="aboutusContent">
        <h1>About Us</h1>
        <p>
          Welcome to PixelVision Studio, where we capture moments that last a
          lifetime! We are a passionate team of photographers dedicated to
          providing top-notch photography services for all your creative needs.
          Whether you're looking for stunning portraits, captivating event
          coverage, or breathtaking landscapes, we've got you covered. With our experienced team, creative solutions,
          and client-centric approach, we are ready to help you capture memories
          that will last a lifetime. Contact us today to learn more about how
          PixelVision Studio can help you achieve your photography goals!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;

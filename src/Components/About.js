import React from "react";
import AboutBackgroundImage from "../Assets/mceclip4.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          We Help You Save Time
        </h1>
        <p className="primary-text">
        At BooKwik, we're reimagining the way you experience appointments. Say goodbye to idle moments in waiting rooms — we've harnessed the power of technology to introduce the virtual waiting room. At BooKwik, we empower you to leave home at the perfect moment, ensuring you arrive just in time for your turn at the dentist, barbershop, or wherever you need to be. Our mission is simple: save you time and enhance your overall appointment experience. Embrace a future where your time is valued and waiting becomes a thing of the past.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;

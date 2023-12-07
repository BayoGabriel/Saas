import React from "react";
import BannerImage from "../Assets/portrait-african-american-patient-looking-tired-waiting-busy-hospital-reception-room-with-diverse-people-bored-man-sitting-down-looking-pensive-waiting-receptionist-call-his-name.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import "../Assets/Styles/Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        
        <div className="home-text-section">
          <h1 className="primary-heading">
            No More Waiting Room <span>Woes</span>
          </h1>
          <p className="primary-text">
          Why spend hours waiting for your turn when it can easily be avoided by using BooKwik?
          </p>
          <button className="secondary-button primary-button">
            Join Waitlist <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

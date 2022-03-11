import React from "react";
import "./Careers.css";
import Jumbotron from "./Jumbotron";
import image from "../assets/careers-banner.jpg";
import Amenities from "./Amenities";

const Careers = () => {
  return (
    <>
      <Jumbotron
        title="Careers"
        image={image}
        info="Join us on our path to perfection on creating the perfect experience"
      />
      <div className="career-banner">
        <p>
          Come join the team that can help you reach new heights in your career.
          <br />
          Come join the team that has a culture of crushing goals and
          consistently leveling up!
        </p>
      </div>
      <Amenities />
    </>
  );
};

export default Careers;

import React from "react";
import "./Careers.css";
import Jumbotron from "./Jumbotron";
import image from "../assets/careers-banner.jpg";

const Careers = () => {
  return (
    <>
      <Jumbotron
        title="Careers"
        image={image}
        info="To be the best you have to work with the best in the industry"
      />
      <div className="career-banner">
        <p>
          Come join the team that can help you reach new heights in your career.
          <br />
          Come join the team that has a culture of crushing goals and
          consistently leveling up!
        </p>
      </div>
    </>
  );
};

export default Careers;

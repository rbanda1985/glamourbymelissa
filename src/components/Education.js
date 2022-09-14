import React from "react";
import "./Education.css";
import Jumbotron from "./Jumbotron";
import CardEducation from "./CardEducation";
import dataEducation from "../dataEducation";
import image from "../assets/education-banner.jpg";

const Education = () => {
  return (
    <>
      {/* <Jumbotron
        title="Education"
        info="Lets sharpen your skills, lets sharpen your knowledge, and lets make
          you more desirable as a hair dresser."
        image={image}
      />
      <div className="page-description">
        <p>Below you will see a couple of classes that I have listed.</p>
        <p>
          If you click on the buttons below you will be redirected to buy a
          ticket for my up and coming classes.
        </p>
        <p>Hope to see you there!</p>
      </div>
      <div className="education-cards">
        {dataEducation.map(data => (
          <CardEducation
            key={data.image}
            title={data.title}
            image={data.image}
            info={data.description}
            link={data.link}
          />
        ))}
      </div> */}
      <div className="coming-soon">
        <h1>-Coming Soon January 2023-</h1>
      </div>
    </>
  );
};

export default Education;

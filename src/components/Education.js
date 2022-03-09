import React from "react";
import "./Education.css";
import Jumbotron from "./Jumbotron";
import CardEducation from "./CardEducation";
import dataEducation from "../dataEducation";

const Education = () => {
  return (
    <>
      <Jumbotron />
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
      </div>
    </>
  );
};

export default Education;

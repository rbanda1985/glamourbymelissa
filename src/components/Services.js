import React from "react";
import Title from "./Title";
import CardService from "./CardService";
import cardInfo from "../dataServices";

const Services = () => {
  return (
    <div className="services-container">
      <Title title="Services" />
      <div className="card-service">
        {cardInfo.map(data => (
          <CardService
            key={data.title}
            image={data.image}
            title={data.title}
            description={data.info}
            link={data.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

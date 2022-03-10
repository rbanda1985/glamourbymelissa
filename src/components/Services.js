import React from "react";
import Title from "./Title";
import "./Services.css";
import CardService from "./CardService";
import cardInfo from "../dataServices";
import Policies from "./Policies";
import ServicesBanner from "./ServicesBanner";

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
      <ServicesBanner />
      <div className="salon-policies">
        <h3>Salon Policies</h3>
      </div>
      <Policies />
    </div>
  );
};

export default Services;

import React from "react";
import Title from "./Title";
import "./Services.css";
import CardService from "./CardService";
import cardInfo from "../dataServices";
import Policies from "./Policies";
import ServicesBanner from "./ServicesBanner";
import { MDBBtn } from "mdb-react-ui-kit";

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

    <div className="extension-info">
      <p className="extension-method-title">-Extension Methods-</p>
      <p>If you're wanting to know more about what extension method might be the right one for you, please follow the link below for more information on the different methods I offer.
      </p>
      <MDBBtn className='ext-btn' href="/extension-methods">Extension Methods</MDBBtn>
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

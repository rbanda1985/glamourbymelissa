import React from "react";
import "./ServicesBanner.css";

const ServicesBanner = () => {
  return (
    <div className="services-banner">
      <div className="service-banner-title">
        <h3>Behind The Chair</h3>
      </div>
      <div className="hours">
        <p>
          If you're interested in booking an appointment with me, please keep in
          mind that I am only behind the chair Tuesday 12pm - 6pm and Wednesday
          through Friday 9am - 6pm.
        </p>
      </div>
      <div className="small-service">
        <p>
          For any small services such as grey coverage, haircuts, brazilian
          blowouts, etc. Please email my salon at paintedhairsociety@gmail.com.
          Please allow 24-48 hours for a response.
        </p>
      </div>
    </div>
  );
};

export default ServicesBanner;

import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ title, info, image }) => {
  return (
    <div
      className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white jumbo-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="jumbo-text">
        <h1 className="mb-3 h2 jumbo-header">{title}</h1>

        <p>{info}</p>
      </div>
    </div>
  );
};

export default Jumbotron;

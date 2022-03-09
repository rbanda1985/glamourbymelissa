import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white jumbo-banner">
      <div className="jumbo-text">
        <h1 className="mb-3 h2 jumbo-header">Education</h1>

        <p>
          Lets sharpen your skills, lets sharpen your knowledge, and lets make
          you more desirable as a hair dresser.
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;

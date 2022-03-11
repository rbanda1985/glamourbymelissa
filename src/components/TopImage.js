import React from "react";

const TopImage = ({ image }) => {
  return (
    <>
      <div className="image-container text-center d-flex justify-content-center align-items-center">
        <div className="bg-image" style={{ height: "auto", flex: "1" }}>
          <img
            src={image}
            className="img-fluid shadow-4"
            id="back-image"
            alt="home"
            style={{ width: "100%" }}
          />
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          ></div>
        </div>
        <p className="fade-in-text display-5">
          Experience Stylish Hair Like Never Before
        </p>
      </div>
    </>
  );
};

export default TopImage;

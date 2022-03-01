import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import "./Home.css";
import image from "../assets/benyamin-bohlouli.jpg";

const Home = () => {
  return (
    <>
      <div className="image-container text-center d-flex justify-content-center align-items-center">
        <div className="bg-image">
          <img
            src={image}
            className="img-fluid shadow-4 d-block"
            id="back-image"
            alt="home"
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
      <MDBContainer></MDBContainer>
    </>
  );
};

export default Home;

import React from "react";
import { MDBTypography } from "mdb-react-ui-kit";
import "./Home.css";
import image from "../assets/salon4.jpg";
import image2 from "../assets/melissa2.jpg";
import TopImage from "./TopImage";
import ImageInfo from "./ImageInfo";
import Card from "./Card";
import data from "../data";

const Home = () => {
  return (
    <>
      <TopImage image={image} />
      <ImageInfo image2={image2} />
      <div className="goal-container">
        <MDBTypography tag="h3" style={{ textDecoration: "underline" }}>
          My Goal
        </MDBTypography>
        <MDBTypography tag="div" className="display-6">
          Through up to date techniques, styles, and methods, my goal is to help
          you acheive the desired look you're looking for each and every single
          time you sit in my chair!
        </MDBTypography>
      </div>
      <div className="mid-page-text">
        <MDBTypography tag="h4" className="mid-text">
          - It's ok to be a litle obsessed with your hair. -
        </MDBTypography>
      </div>
      <div className="cards">
        {data.map(item => (
          <Card
            key={item.id}
            title={item.title}
            image={item.image}
            info={item.description}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
};

export default Home;

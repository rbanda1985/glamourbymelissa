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

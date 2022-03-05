import React from "react";
import { MDBTypography } from "mdb-react-ui-kit";
import "./Home.css";
import image from "../assets/salon4.jpg";
import image2 from "../assets/melissa2.jpg";
import image3 from "../assets/education.jpg";
import image4 from "../assets/services.jpg";
import image5 from "../assets/careers.jpg";
import TopImage from "./TopImage";
import ImageInfo from "./ImageInfo";
import Card from "./Card";

const Home = () => {
  return (
    <>
      <TopImage image={image} />
      <ImageInfo image2={image2} />
      <div className="mid-page-text">
        <MDBTypography tag="h4">
          - It's ok to be a litle obsessed with your hair. -
        </MDBTypography>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={image3}
            title="Education"
            info="I'm ready to learn to become the best"
            link="/education"
          />
        </div>
        <div className="card2">
          <Card
            image={image4}
            title="Services"
            info="Make me look like the beautiful empowered woman that I am."
            link="/services"
          />
          <Card
            image={image5}
            title="Careers"
            info="Looking for an opportunity? This is the place!"
            link="/services"
          />
        </div>
      </div>
    </>
  );
};

export default Home;

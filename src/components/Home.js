import React from "react";
import { MDBContainer, MDBCol, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import "./Home.css";
import image from "../assets/salon4.jpg";
import image2 from "../assets/melissa2.jpg";
import TopImage from "./TopImage";
import ImageInfo from "./ImageInfo";

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
      <MDBContainer fluid className="d-flex justify-content-center">
        <MDBRow>
          <MDBCol size="md-6">
            <img
              src={image2}
              className="img-thumbnail"
              alt="Services"
              style={{ maxWidth: "24rem" }}
            />
          </MDBCol>
          <MDBCol size="md-6">
            <img
              src={image2}
              className="img-thumbnail"
              alt="Services"
              style={{ maxWidth: "24rem" }}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Home;

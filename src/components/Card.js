import React from "react";
import "./Card.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn
} from "mdb-react-ui-kit";

const Card = ({ image, title, info, link }) => {
  return (
    <MDBCard style={{ maxWidth: "540px" }}>
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage src={image} alt="..." fluid />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>{info}</MDBCardText>
            <MDBBtn href={link}>Get Started</MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
};

export default Card;

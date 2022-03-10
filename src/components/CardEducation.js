import React from "react";
import "./CardEducation.css";
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

const CardEducation = ({ title, image, info, link }) => {
  return (
    <MDBCard style={{ maxWidth: "100%" }}>
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage src={image} alt="..." fluid />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle className="card-education-title">
              {title}
            </MDBCardTitle>
            <MDBCardText
              style={{
                fontFamily: "roboto, sans-serif",
                fontStyle: "italic",
                fontWeight: "100"
              }}
            >
              {info}
            </MDBCardText>
            <MDBBtn href={link}>Get Started</MDBBtn>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
};

export default CardEducation;

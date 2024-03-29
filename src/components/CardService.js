import React from "react";
import "./CardService.css";
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

const CardService = ({ image, title, description, link, linkTwo, classNames }) => {

  return (
    <>
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage src={image} alt="..." fluid />
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle className="services-card-title">
                {title}
              </MDBCardTitle>
              <MDBCardText className="description">{description}</MDBCardText>
              <MDBBtn href={link} style={{backgroundColor: 'pink', color: 'black', fontFamily: "Audrey Bold"}}>Book Now</MDBBtn>
              <MDBBtn className={classNames} href={linkTwo} style={{backgroundColor: 'pink', color: 'black', fontFamily: "Audrey Bold"}}>Extension Methods</MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </>
  );
};

export default CardService;

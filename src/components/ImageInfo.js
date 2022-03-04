import React from "react";
import "./ImageInfo.css";
import { MDBContainer, MDBCol, MDBRow, MDBTypography } from "mdb-react-ui-kit";

const ImageInfo = ({ image2 }) => {
  return (
    <>
      <MDBContainer fluid className="container-style">
        <MDBRow className="row-style">
          <MDBCol className="col-sm-9 col-md-5 column-style">
            <div className="image-box">
              <img
                src={image2}
                className="image-info shadow-4-strong"
                alt="Services"
                style={{
                  maxWidth: "24rem"
                }}
              />
            </div>
            <MDBTypography className="text-wrap paragraph">
              Welcome to my website! It is a pleasure to have you visiting.
              Below you will see the services and education links. Please
              navigate through those so that you can get familiarized with my
              processes and also dates and times of my classes. Hope to see you
              soon!!
            </MDBTypography>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default ImageInfo;

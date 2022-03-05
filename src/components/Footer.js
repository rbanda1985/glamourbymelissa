import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import logo from "../assets/watermark.png";

const Footer = () => {
  return (
    <MDBFooter
      bgColor="dark"
      color="white"
      className="text-center text-lg-start footer"
      style={{ marginTop: "4em" }}
    >
      <section className="d-flex justify-content-center p-4 border-bottom">
        <div>
          <a
            href="https://www.facebook.com/glamourbymelissa1"
            className="me-4 text-reset"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/glamourby_melissa/"
            className="me-4 text-reset"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Glamour By Melissa Salon
              </h6>
              <p>
                Thank you for visitng the website. Feel free to contact me
                should you have any questions or concerns.
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> 1409 Botham Jean, Dallas,
                TX.
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                glamourbymelissa1@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
            </div>
          </div>
        </div>
      </section>
    </MDBFooter>
  );
};

export default Footer;

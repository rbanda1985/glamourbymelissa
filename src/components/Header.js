import React, { useState } from "react";
import "./Header.css";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav
} from "mdb-react-ui-kit";

const Header = () => {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" light style={{ backgroundColor: "#FCE4EC" }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="#" className="brandName">
            Glamour By Melissa
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="#"
                  className="header-btn"
                >
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#" className="header-btn">
                  Services
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#" className="header-btn">
                  Location
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#" className="header-btn">
                  Education
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Header;

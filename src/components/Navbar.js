import React, { useState } from "react";
import "./Navbar.css";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBNavbarNav
} from "mdb-react-ui-kit";
import { FaInstagramSquare } from "react-icons/fa";

const Navbar = ({ logo, headerOne, headerTwo, headerThree, headerFour }) => {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <>
      <MDBNavbar
        expand="lg"
        light
        className="sticky-top"
        style={{ backgroundColor: "#FCE4EC" }}
      >
        <MDBContainer fluid>
          <MDBNavbarBrand href="/" className="brandName">
            <img src={logo} alt="logo" />
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
                  className="header-btn"
                  href="/"
                >
                  {headerOne}
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/services" className="header-btn">
                  {headerTwo}
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/education" className="header-btn">
                  {headerThree}
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/careers" className="header-btn">
                  {headerFour}
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="https://www.instagram.com/glamourby_melissa/">
                  <FaInstagramSquare style={{ height: "2em", width: "2em" }} />
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbar;

import React from "react";
import "./Header.css";
import logo from "../assets/watermark.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Navbar
        logo={logo}
        headerOne="Home"
        headerTwo="Services"
        headerThree="Education"
        headerFour="Careers"
      />
    </>
  );
};

export default Header;

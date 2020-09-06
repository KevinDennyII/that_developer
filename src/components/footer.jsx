import React from "react";
// import emailjs from "emailjs-com";

const Footer = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {" "}
        Kevin Denny II &#169; 2020 All Rights Reserved. <br />
        <nav role="navigation" className="navbar">
          <div id="navbar">
            <a href="#home" data-nav-section="home">
              Introduction
            </a>{" "}
            |{" "}
            <a href="#about" data-nav-section="about">
              About
            </a>{" "}
            |{" "}
            <a href="#whatido" data-nav-section="whatido">
              What I Do?
            </a>{" "}
            |{" "}
            <a href="#timeline" data-nav-section="timeline">
              Timeline
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;

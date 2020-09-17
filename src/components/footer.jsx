import React from "react";
import bcc from "../images/static1.squarespace.jpg";
// import emailjs from "emailjs-com";

const Footer = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {" "}
        Kevin Denny II &#169; 2020 All Rights Reserved. <br />
      </div>
      <div style={{ textAlign: "center", fontSize: "1.2rem" }}>
        Proud member of{" "}
        <a href="https://blackcodecollective.com/">Black Code Collective</a>{" "}
        <img
          src={bcc}
          width="31px"
          height="31px"
          style={{ borderRadius: "6px" }}
          alt="Black Code Collective log with a black fist in between curly braces"
        />
      </div>
    </div>
  );
};

export default Footer;

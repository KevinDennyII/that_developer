import React from "react";
import bcc from "../../images/bcclog.png";

const FooterComponent = () => {
  return (
    <div>
      <div className="bccMember">
        Proud member of{" "}
        <a href="https://blackcodecollective.com/">Black Code Collective</a>{" "}
        <img
          src={bcc}
          width="5%"
          height="5%"
          style={{ borderRadius: "6px" }}
          alt="Black Code Collective log with a black fist in between curly braces"
        />
      </div>
      <div style={{ textAlign: "center" }}>
        {" "}
        Kevin Denny II &#169; 2020 All Rights Reserved. <br />
      </div>
    </div>
  );
};

export default FooterComponent;

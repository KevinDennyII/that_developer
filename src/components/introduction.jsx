import React from "react";
// import avi from "../images/kevin_final.png";

const Introduction = ({ myLinks, email }) => {
  return (
    <>
      <div className="introduction">
        <div
          className="avi-header"
          title="Kevin Denny II with a yellow hoodie that says Without Music The World Would B Flat"
          // style={{
          //   margin: "auto 0 auto 100px",
          //   backgroundImage: "url(/images/kevin_final.png)",
          //   //backgroundSize: "24rem 31rem",
          // }}
        />
        <div
          style={{
            textAlign: "center",
            margin: "auto 20px auto 0",
            fontFamily: "Titillium Web, sans-serif",
          }}
        >
          <h4 style={{ lineHeight: "0.1rem", letterSpacing: "0.35em" }}>
            Kevin Denny II
          </h4>
          <h3 style={{ lineHeight: "0.1rem" }}>Web Developer</h3>
          <h3 style={{ lineHeight: "0.1rem" }}>Music Curator</h3>
          <h3 style={{ lineHeight: "0.1rem" }}>Life Long Learner</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "space-between",
              justifyContent: "center",
            }}
          >
            {myLinks.map((link) => (
              <div key={link.network.toLowerCase()}>
                <a href={link.url}>
                  <i
                    className={`icon-social-${link.network.toLowerCase()}`}
                    style={{ fontSize: "25px" }}
                  />
                </a>
              </div>
            ))}
            <div key="Instagram">
              <a href="https://instagram.com/djlookup">
                <i className={`icon-instagram`} style={{ fontSize: "15px" }} />
              </a>
            </div>
          </div>
          <div>
            <span className="email">
              <i className="icon-mail" />
              <a href={`mailto:${email}`}>{email}</a>
            </span>
          </div>
        </div>
      </div>
      {/*<div id="navbar">*/}
      {/*<div style={{ display: "block", margin: "auto", textAlign: "center" }}>*/}
    </>
  );
};

export default Introduction;

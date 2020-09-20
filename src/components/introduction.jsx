import React from "react";
import { NavLink } from "react-router-dom";

const Introduction = ({ myLinks, email }) => {
  return (
    // <>
    <div>
      <section
        className="colorlib-experience"
        style={{
          marginTop: "0px",
          marginBottom: "0px",
          paddingBottom: "0px",
          paddingTop: "0px",
        }}
        data-section="home"
      >
        <div className="introduction">
          <div
            className="avi-header"
            title="Kevin Denny II with a yellow hoodie that says Without Music The World Would B Flat"
          />
          <div
            style={{
              textAlign: "center",
              margin: "auto 0 auto 0",
              fontFamily: "Titillium Web, sans-serif",
              width: "30rem",
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
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <i
                      className={`icon-social-${link.network.toLowerCase()}`}
                      style={{ fontSize: "25px" }}
                    />
                  </a>
                </div>
              ))}
              <div key="Instagram">
                <a
                  href="https://instagram.com/djlookup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className={`icon-instagram`}
                    style={{ fontSize: "15px" }}
                  />
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
        <nav style={{ textAlign: "center" }}>
          <NavLink
            activeStyle={{ fontWeight: "700" }}
            className="menu-link"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            activeStyle={{ fontWeight: "700" }}
            className="menu-link"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            activeStyle={{ fontWeight: "700" }}
            className="menu-link"
            to="/expertise"
          >
            What I Do
          </NavLink>
          <NavLink
            activeStyle={{ fontWeight: "700" }}
            className="menu-link"
            to="/experience"
          >
            Experience
          </NavLink>
        </nav>
      </section>
      <hr className="divider gradient" contentEditable />
    </div>
  );
};

export default Introduction;

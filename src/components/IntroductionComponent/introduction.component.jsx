import React from "react";
import { NavLink } from "react-router-dom";

import {
  aviHeader,
  introduction,
  links,
  introInfo,
  menuItems,
} from "./introduction.module.scss";

const IntroductionComponent = ({ myLinks, email }) => {
  return (
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
        <div className={introduction}>
          <div
            className={aviHeader}
            title="Kevin Denny II with a yellow hoodie that says Without Music The World Would B Flat"
          />
          <div className={introInfo}>
            <h4>Kevin Denny II</h4>
            <h3>Web Developer</h3>
            <h3>Music Curator</h3>
            <h3>Life Long Learner</h3>
            <div className={links}>
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
        <nav className={menuItems}>
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
            style={{ wordBreak: "normal" }}
            to="/expertise"
          >
            What I Do
          </NavLink>
          {/*<NavLink*/}
          {/*  activeStyle={{ fontWeight: "700" }}*/}
          {/*  className="menu-link"*/}
          {/*  to="/experience"*/}
          {/*>*/}
          {/*  Experience*/}
          {/*</NavLink>*/}
          <NavLink
            activeStyle={{ fontWeight: "700" }}
            className="menu-link"
            to="/work-experience"
          >
            Experience
          </NavLink>
        </nav>
      </section>
      <hr className="divider gradient" contentEditable />
    </div>
  );
};

export default IntroductionComponent;

import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  aviHeader,
  headerBkg,
  introduction,
  introInfo,
  links,
  menuItems,
  headerLinks,
  // emailIcon,
  resumeLink,
} from './introduction.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBluesky } from '@fortawesome/free-brands-svg-icons';


type Link = {
  network: string;
  username: string;
  url: string;
};


type Links = {
  myLinks: Link[]
}
function IntroductionComponent({ myLinks } : Links) {
  return (
    <div className={headerBkg}>
      <section
        className="colorlib-experience"
        style={{
          marginTop: '0px',
          marginBottom: '0px',
          paddingBottom: '0px',
          paddingTop: '0px',
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
            <h3><a
              href="https://bitesizedhuman.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration: 'none', color: '#000'}}
            >Published Author</a></h3>
            <h3>Web Developer</h3>
            <h3>Music Curator</h3>
            <h3>Life Long Learner</h3>
            <div className={links}>
              {myLinks.map((link: { network: string; url: string | undefined; }) => (
                <div key={link.network.toLowerCase()}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <i
                      className={`icon-social-${link.network.toLowerCase()} ${headerLinks}`}
                      style={{ fontSize: '25px' }}
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
                    className={`icon-instagram ${headerLinks}`}
                    style={{ fontSize: '15px' }}
                  />
                </a>
              </div>
              <div key="Bluesky">
                <a
                  href="https://bsky.app/profile/thatdeveloper.bsky.social
"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faBluesky} size="1x" style={{ fontSize: '15px' }} className={headerLinks} />
                </a>
              </div>
            </div>
            <div style={{ paddingTop: '5px' }}>
              {/*<div>*/}
              {/*<span className="email">*/}
              {/*  <i className={`icon-mail ${emailIcon}`} />*/}
              {/*  <NavLink*/}
              {/*    activeStyle={{ fontWeight: '700' }}*/}
              {/*    className={headerLinks}*/}
              {/*    to="/send-message"*/}
              {/*    style={{ fontSize: '15px' }}*/}
              {/*  >*/}
              {/*    Send Me A Message!*/}
              {/*  </NavLink>*/}
              {/*</span>*/}
              {/*</div>*/}
              <div className={resumeLink}>
                <a
                  href="https://docs.google.com/document/d/1oLTOrlvB4jscqGfbCjJ6vhLh3NgH29oMwb4OLCRjFYA/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download My Resume
                </a>
              </div>

            </div>
          </div>
        </div>
        <nav className={menuItems}>
          <NavLink
            activeStyle={{ fontWeight: '700' }}
            className="menu-link"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            activeStyle={{ fontWeight: '700' }}
            className="menu-link"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            activeStyle={{ fontWeight: '700' }}
            className="menu-link"
            style={{ wordBreak: 'normal' }}
            to="/expertise"
          >
            What I Do
          </NavLink>
          <NavLink
            activeStyle={{ fontWeight: '700' }}
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
}

export default IntroductionComponent;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { get } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBluesky, faGithub, faGit, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SidebarProps {
  basics: any;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarComponent: React.FC<SidebarProps> = ({ basics, isOpen, toggleSidebar }) => {
  const socialIcons: { [key: string]: IconDefinition } = {
    gitconnected: faGit,
    github: faGithub,
    linkedin: faLinkedin,
    instagram: faInstagram,
    x: faXTwitter,
    bluesky: faBluesky,
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar} className="close-btn">×</button>
      <div className="text-center">
        <div
          className="author-img"
          style={{
            backgroundImage: `url(${get(basics, "image")})`,
          }}
        />
        <h1 id="colorlib-logo">
          <a href="index.html">{get(basics, "name")}</a>
        </h1>
        <span className="email">
          <i className="icon-mail" />
          {get(basics, "email")}
        </span>
      </div>
      <nav id="colorlib-main-menu" role="navigation" className="navbar">
        <div id="navbar" className="collapse">
          <ul>
            <li className="active">
              <NavLink to="/" exact onClick={toggleSidebar}>Introduction</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleSidebar}>About</NavLink>
            </li>
            <li>
              <NavLink to="/expertise" onClick={toggleSidebar}>What I Do?</NavLink>
            </li>
            <li>
              <NavLink to="/work-experience" onClick={toggleSidebar}>Experience</NavLink>
            </li>
            <li>
              <NavLink to="/send-message" onClick={toggleSidebar}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="colorlib-main-menu">
        <ul>
          {get(basics, "profiles", []).map((profile: any) => (
            <li key={profile.network.toLowerCase()}>
              <a href={profile.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={socialIcons[profile.network.toLowerCase()]} size="1x" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarComponent;

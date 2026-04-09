import React from 'react';
import { NavLink } from 'react-router-dom';
import { get } from 'lodash';

import {
  aviHeader,
  headerBkg,
  introduction,
  introInfo,
  links,
  headerLinks,
  resumeLink,
} from './introduction.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBluesky, faGithub, faGit, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Role {
  title: string;
  url?: string;
}

interface Profile {
  network: string;
  url: string;
}

interface Basics {
  name: string;
  roles: Role[];
  profiles: Profile[];
}

interface IntroductionProps {
  basics: Basics;
}

const IntroductionComponent: React.FC<IntroductionProps> = ({ basics }) => {
  const socialIcons: { [key: string]: IconDefinition } = {
    gitconnected: faGit,
    github: faGithub,
    linkedin: faLinkedin,
    instagram: faInstagram,
    x: faXTwitter,
    bluesky: faBluesky,
  };

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
            <h4>{get(basics, "name")}</h4>
            {get(basics, "roles", []).map((role: Role) => (
              <h3 key={role.title}>
                {role.url ? (
                  <a href={role.url} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: '#000'}}>
                    {role.title}
                  </a>
                ) : (
                  role.title
                )}
              </h3>
            ))}
            <div className={links}>
              {get(basics, "profiles", []).map((profile: Profile) => (
                <div key={profile.network.toLowerCase()}>
                  <a href={profile.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socialIcons[profile.network.toLowerCase()]} size="1x" style={{ fontSize: '15px' }} className={headerLinks} />
                    <span className="sr-only">{profile.network}</span>
                  </a>
                </div>
              ))}
            </div>
            <div style={{ paddingTop: '5px' }}>
              <div className={resumeLink}>
                <a href="https://gitconnected.com/kevindennyii/resume" target="_blank" rel="noopener noreferrer">
                  <button type="submit">View Resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntroductionComponent;

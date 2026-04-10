import React from 'react';
import { get } from 'lodash';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faBluesky } from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import styles from './introduction.module.scss';
import HeaderNav from './headerNav.component';

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

const EXCLUDED_HEADER_NETWORKS = new Set(['gitconnected', 'x', 'twitter']);

const RESUME_DOC_URL =
  'https://docs.google.com/document/d/1oLTOrlvB4jscqGfbCjJ6vhLh3NgH29oMwb4OLCRjFYA/edit?usp=sharing';

const IntroductionComponent: React.FC<IntroductionProps> = ({ basics }) => {
  const socialIcons: Record<string, IconDefinition> = {
    github: faGithub,
    linkedin: faLinkedin,
    instagram: faInstagram,
    book: faBook,
    bluesky: faBluesky,
  };

  return (
    <div className={styles.headerBkg}>
      <section className={styles.introduction} data-section="home">
        <div className={styles.aviHeader} title="Kevin Denny II with a yellow hoodie that says Without Music The World Would B Flat" />
        <div className={styles.introInfo}>
          <h1 className={styles.introName}>{get(basics, 'name')}</h1>
          <ul className={styles.roleList}>
            {get(basics, 'roles', []).map((role: Role) => (
              <li key={role.title}>
                {role.url ? (
                  <a href={role.url} target="_blank" rel="noopener noreferrer">
                    {role.title}
                  </a>
                ) : (
                  role.title
                )}
              </li>
            ))}
          </ul>
          <div className={styles.links}>
            {get(basics, 'profiles', [])
              .filter(
                (profile: Profile) =>
                  !EXCLUDED_HEADER_NETWORKS.has(profile.network.toLowerCase()),
              )
              .map((profile: Profile) => {
                const icon = socialIcons[profile.network.toLowerCase()];
                return (
                  <div key={profile.network.toLowerCase()}>
                    <a href={profile.url} target="_blank" rel="noopener noreferrer">
                      {icon && (
                        <FontAwesomeIcon icon={icon} size="1x" className={styles.headerLinks} />
                      )}
                      <span className="sr-only">{profile.network}</span>
                    </a>
                  </div>
                );
              })}
          </div>
          <a
            className={styles.resumeCta}
            href={RESUME_DOC_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download My Resume
          </a>
        </div>
      </section>
      <HeaderNav />
      <div className={styles.headerDivider} aria-hidden />
    </div>
  );
};

export default IntroductionComponent;

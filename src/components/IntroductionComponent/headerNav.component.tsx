import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './introduction.module.scss';

const HeaderNav: React.FC = () => {
  return (
    <nav className={styles.headerNav} aria-label="Main navigation">
      <ul className={styles.headerNavList}>
        <li>
          <NavLink to="/" exact activeClassName={styles.navLinkActive} className={styles.navLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={styles.navLinkActive} className={styles.navLink}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/expertise" activeClassName={styles.navLinkActive} className={styles.navLink}>
            What I Do
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" activeClassName={styles.navLinkActive} className={styles.navLink}>
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName={styles.navLinkActive} className={styles.navLink}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;

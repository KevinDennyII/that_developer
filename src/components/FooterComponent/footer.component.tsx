import React from 'react';
import styles from './footer.module.scss';
import bcc from '../../images/bcclog.png';

function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="bccMember">
        Proud member of
        {' '}
        <a href="https://blackcodecollective.com/">Black Code Collective</a>
        {' '}
        <img
          src={bcc}
          className={styles.bccLogo}
          alt="Black Code Collective log with a black fist in between curly braces"
        />
      </div>
      <div className={styles.copyright}>
        {' '}
        Kevin Denny II &#169; {currentYear} All Rights Reserved.
        {' '}
        <br />
      </div>
    </div>
  );
}

export default FooterComponent;

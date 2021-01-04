import React from 'react';
import { bccLogo } from './footer.module.scss';
import bcc from '../../images/bcclog.png';

const FooterComponent = () => (
  <div>
    <div className="bccMember">
      Proud member of
      {' '}
      <a href="https://blackcodecollective.com/">Black Code Collective</a>
      {' '}
      <img
        src={bcc}
        className={bccLogo}
        alt="Black Code Collective log with a black fist in between curly braces"
      />
    </div>
    <div style={{ textAlign: 'center' }}>
      {' '}
      Kevin Denny II &#169; 2021 All Rights Reserved.
      {' '}
      <br />
    </div>
  </div>
);

export default FooterComponent;

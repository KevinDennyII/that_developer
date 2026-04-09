import React from 'react';
import { whatIDoData } from './whatido.data';
import ExpertiseItem from './ExpertiseItem';

const WhatIDoComponent = () => (
  <section className="colorlib-about" data-section="whatido">
    <div className="colorlib-narrow-content">
      <div className="row">
        <div
          className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
          data-animate-effect="fadeInLeft"
        >
          <span className="heading-meta">What I do?</span>
          <h2 className="colorlib-heading">Here are some of my expertise</h2>
        </div>
      </div>
      <div className="row row-pt-md">
        {whatIDoData.map((item, index) => (
          <ExpertiseItem item={item} key={index} />
        ))}
      </div>
    </div>
  </section>
);
export default WhatIDoComponent;


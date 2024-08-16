import React from 'react';
import awsCert from '../../documents/AWS_Certified_Developer-Associate_Certificate.pdf';
import mcpCert from '../../documents/MCP_ProgrammingInHTML_JavaScript_CSS.pdf';

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
        <div className="col-md-4 text-center animate-box">
          <div className="services color-1">
            <span className="icon">
              <i className="icon-bulb" />
            </span>
            <div className="desc">
              <h3>Web Development </h3>
              <p>
                I have experience building websites using Content Management
                Systems like Wordpress. I have professional experience coding
                with object-oriented languages and I am
                {' '}
                <a href={mcpCert} target="_blank" rel="noopener noreferrer">
                  Microsoft Certified in JavaScript, HTML, and CSS
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center animate-box">
          <div className="services color-3">
            <span className="icon">
              <i className="icon-phone3" />
            </span>
            <div className="desc">
              <h3>Data Structures & Algorithms</h3>
              <p>
                My Computer Science background laid a solid foundation on the
                fundamental concepts of Data Structures & Algorithms
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center animate-box">
          <div className="services color-5">
            <span className="icon">
              <i className="icon-data" />
            </span>
            <div className="desc">
              <h3>Dev Ops</h3>
              <p>
                I have been previously certified as an
                {' '}
                <a href={awsCert} target="_blank" rel="noopener noreferrer">
                  Amazon Web Services (AWS) Developer Associate
                </a>
                . I have 4 years of experience in configuring and managing
                data solutions with AWS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default WhatIDoComponent;

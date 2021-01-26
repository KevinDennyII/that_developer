import React from 'react';
import blackFamily from '../../images/black-family-on-couch.png';
import blackManUsingLaptop from '../../images/black-man-computing.png';
import blackManLearning from '../../images/black-man-learning.png';
import blackManGraduate from '../../images/black-man-graduate.png';
import blackManReading from '../../images/black-man-reading.png';
import blackPeopleDancing from '../../images/black-people-dancing.png';
import { container, aboutImg } from './about.module.scss';

const AboutComponent = () => (
  <div>
    <section className="colorlib-about" data-section="about">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-12">
            <div
              className="row row-bottom-padded-sm animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="col-md-12">
                <div className="about-desc">
                  <span className="heading-meta">About Me</span>
                  <h2 className="colorlib-heading">Who Am I?</h2>
                  <div className={container}>
                    <img
                      className={aboutImg}
                      width="350px"
                      src={blackFamily}
                      alt="black family sitting on couch"
                    />
                    <p>I am loving husband, VERY proud father of 2.</p>
                  </div>
                  <div className={container}>
                    <p>I am a computer scientist graduate of Virginia Tech, class of 2007</p>
                    <img
                      className={aboutImg}
                      width="350px"
                      src={blackManGraduate}
                      alt="black man graduate"
                    />

                  </div>
                  <div className={container}>
                    <img
                      className={aboutImg}
                      width="350px"
                      src={blackManUsingLaptop}
                      alt="black man programming"
                    />
                    <p>I am software and web developer with over 15 years of experience.</p>
                  </div>
                  <div className={container}>
                    <p>I have a passion to continuously learn.</p>
                    <img
                      className={aboutImg}
                      width="350px"
                      src={blackManLearning}
                      alt="black man write on white board"
                    />
                  </div>
                  <div className={container}>
                    <img
                      className={aboutImg}
                      width="350px"
                      src={blackManReading}
                      alt="black man reading on couch"
                    />
                    {/* eslint-disable-next-line max-len */}
                    <p>
                      I love reading all types of books but when it comes to web development.
                      I particular have keen interest in JavaScript.
                      I am avid fan of Kyle Simpson and his "You Don't Know JS" series and "Functional-Light JavaScript"
                    </p>
                  </div>
                  <div className={container}>
                    <p>I am a curator of music; a DJ and hip hop enthusiast</p>
                    <img
                      className={aboutImg}
                      width="350px"
                      src={blackPeopleDancing}
                      alt="black people dancing"
                    />
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutComponent;

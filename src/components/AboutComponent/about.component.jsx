import React from 'react';
import blackFamily from '../../images/black-family-on-couch.png';
import blackManUsingLaptop from '../../images/black-man-computing.png';
import blackManLearning from '../../images/black-man-learning.png';
import blackManGraduate from '../../images/black-man-graduate.png';
import blackManReading from '../../images/black-man-reading.png';
import blackPeopleDancing from '../../images/black-people-dancing.png';
import {
  staggered, unstaggered, container, aboutImg,
} from './about.module.scss';

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
                  <div className={staggered}>
                    <div className={container}>
                      <img
                        className={aboutImg}
                        src={blackFamily}
                        alt="black family sitting on couch"
                      />
                      <p>
                        I am loving husband.
                        <br />
                        A VERY proud father of 2.
                      </p>
                    </div>
                    <div className={container}>
                      <p>I am a computer science graduate of Virginia Tech, class of 2007</p>
                      <img
                        className={aboutImg}
                        src={blackManGraduate}
                        alt="black man graduate"
                      />
                    </div>
                    <div className={container}>
                      <img
                        className={aboutImg}
                        src={blackManUsingLaptop}
                        alt="black man programming"
                      />
                      <p>I am software and web developer with over 15 years of experience.</p>
                    </div>
                    <div className={container}>
                      <p>I have a passion to continuously learn.</p>
                      <img
                        className={aboutImg}
                        src={blackManLearning}
                        alt="black man write on white board"
                      />
                    </div>
                    <div className={container}>
                      <img
                        className={aboutImg}
                        src={blackManReading}
                        alt="black man reading on couch"
                      />
                      {/* eslint-disable-next-line max-len */}
                      <p>
                        {`I love reading all types of books but when it comes to web development
                        I like book series such as "You Dont Know JS" by Kyle Simpson.`}
                      </p>
                    </div>
                    <div className={container}>
                      <p>I am a curator of music; a DJ and hip hop enthusiast.</p>
                      <img
                        className={aboutImg}
                        src={blackPeopleDancing}
                        alt="black people dancing"
                      />
                    </div>
                  </div>
                  <div className={unstaggered}>
                    <div className={container}>
                      <img
                        className={aboutImg}
                        src={blackFamily}
                        alt="black family sitting on couch"
                      />
                      <p>
                        I am loving husband.
                        <br />
                        A VERY proud father of 2.
                      </p>
                    </div>
                    <div className={container}>
                      <img
                        className={aboutImg}
                        src={blackManGraduate}
                        alt="black man graduate"
                      />
                      <p>I am a computer science graduate of Virginia Tech, class of 2007</p>
                    </div>
                    <div className={container}>
                      <img
                        className={aboutImg}
                        src={blackManUsingLaptop}
                        alt="black man programming"
                      />
                      <p>I am software and web developer with over 15 years of experience.</p>
                    </div>
                    <div className={container}>
                      <img
                        className={aboutImg}
                        src={blackManLearning}
                        alt="black man write on white board"
                      />
                      <p>I have a passion to continuously learn.</p>
                    </div>
                    <div className={container}>
                      <img
                        className={aboutImg}
                        src={blackManReading}
                        alt="black man reading on couch"
                      />
                      <p>
                        {`I love reading all types of books but when it comes to web development
                        I like book series such as "You Dont Know JS" by Kyle Simpson.`}
                      </p>
                    </div>
                    <div className={container}>
                      <img
                        className={aboutImg}
                        src={blackPeopleDancing}
                        alt="black people dancing"
                      />
                      <p>I am a curator of music; a DJ and hip hop enthusiast.</p>
                    </div>
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

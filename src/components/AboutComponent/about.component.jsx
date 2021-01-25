import React from 'react';
import blackFamily from '../../images/black-family-on-couch.png';
import blackManUsingLaptop from '../../images/black-man-computing.png';
import blackManLearning from '../../images/black-man-learning.png';
import blackManGraduate from '../../images/black-man-graduate.png';
import blackManReading from '../../images/black-man-reading.png';
import blackPeopleDancing from '../../images/black-people-dancing.png';

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
                  <div>
                    <img
                      width="350px"
                      src={blackFamily}
                      alt="black family sitting on couch"
                    />
                    I am loving husband, VERY proud father of 2
                  </div>
                  <div>
                    <img
                      width="350px"
                      src={blackManGraduate}
                      alt="black man graduate"
                    />
                    I am a computer scientist graduate of Virginia Tech, class of 2007
                  </div>
                  <div>
                    <img
                      width="350px"
                      src={blackManUsingLaptop}
                      alt="black man programming"
                    />
                    I am software and web developer with over 15 years of experience.
                  </div>
                  <div>
                    <img
                      width="350px"
                      src={blackManLearning}
                      alt="black man write on white board"
                    />
                    I have a passion to continuously learn.
                  </div>
                  <div>
                    <img
                      width="350px"
                      src={blackManReading}
                      alt="black man reading on couch"
                    />
                    {/* eslint-disable-next-line max-len */}
                    I love reading all types of books but when it comes to web development.
                    <br />
                    I particular have keen interest in JavaScript.
                    <br />
                    {/* eslint-disable-next-line max-len */}
                    I am avid fan of Kyle Simpson and his "You Don't Know JS" series and "Functional-Light JavaScript"
                  </div>
                  <div>
                    <img
                      width="350px"
                      src={blackPeopleDancing}
                      alt="black people dancing"
                    />
                    I am a curator of music; a DJ and hip hop enthusiast.
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

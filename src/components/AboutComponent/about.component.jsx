import React from 'react';
import blackFamily from '../../images/black-family-on-couch.png';
import blackManUsingLaptop from '../../images/black-man-computing.png';
import blackManLearning from '../../images/black-man-learning.png';
import blackManGraduate from '../../images/black-man-graduate.png';
import blackManReading from '../../images/black-man-reading.png';
import blackPeopleDancing from '../../images/black-people-dancing.png';

const AboutComponent = ({ summary }) => (
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
                  {summary}
                  <div>
                    <img
                      width="350px"
                      src={blackFamily}
                      alt="black family sitting on couch"
                    />
                  </div>
                  <div>
                    <img
                      width="350px"
                      src={blackManLearning}
                      alt="black man write on white board"
                    />
                  </div>
                  <div>
                    <img
                      width="350px"
                      src={blackManUsingLaptop}
                      alt="black man programming"
                    />
                  </div>
                  <div>
                    <img
                      width="350px"
                      src={blackManGraduate}
                      alt="black man graduate"
                    />
                  </div>
                  <div>
                    <img
                      width="350px"
                      src={blackManReading}
                      alt="black man reading on couch"
                    />
                  </div>
                  <div>
                    <img
                      width="350px"
                      src={blackPeopleDancing}
                      alt="black people dancing"
                    />
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

import React from "react";

const About = ({ summary }) => {
  return (
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<section className="colorlib-about" data-section="whatido">*/}
      {/*  <div className="colorlib-narrow-content">*/}
      {/*    <div className="row">*/}
      {/*      <div*/}
      {/*        className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"*/}
      {/*        data-animate-effect="fadeInLeft"*/}
      {/*      >*/}
      {/*        <span className="heading-meta">What I do?</span>*/}
      {/*        <h2 className="colorlib-heading">*/}
      {/*          Here are some of my expertise*/}
      {/*        </h2>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="row row-pt-md">*/}
      {/*      <div className="col-md-4 text-center animate-box">*/}
      {/*        <div className="services color-1">*/}
      {/*          <span className="icon">*/}
      {/*            <i className="icon-bulb" />*/}
      {/*          </span>*/}
      {/*          <div className="desc">*/}
      {/*            <h3>Web Development </h3>*/}
      {/*            <p>*/}
      {/*              I have experience building websites using Content Management*/}
      {/*              Systems like Wordpress. I have professional experience*/}
      {/*              coding in JavaScript, HTML, CSS, and object-oriented*/}
      {/*              languages.*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className="col-md-4 text-center animate-box">*/}
      {/*        <div className="services color-3">*/}
      {/*          <span className="icon">*/}
      {/*            <i className="icon-phone3" />*/}
      {/*          </span>*/}
      {/*          <div className="desc">*/}
      {/*            <h3>Data Structures & Algorithms</h3>*/}
      {/*            <p>*/}
      {/*              As coming from the CS background, I have good grasp over*/}
      {/*              fundamental concepts of DSA*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className="col-md-4 text-center animate-box">*/}
      {/*        <div className="services color-5">*/}
      {/*          <span className="icon">*/}
      {/*            <i className="icon-data" />*/}
      {/*          </span>*/}
      {/*          <div className="desc">*/}
      {/*            <h3>Dev Ops</h3>*/}
      {/*            <p>*/}
      {/*              I am Amazon Web Services (AWS) certified as a Developer*/}
      {/*              Associate. I have 3 years of experiences in configuring and*/}
      {/*              managing data solution with AWS*/}
      {/*            </p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  );
};

export default About;

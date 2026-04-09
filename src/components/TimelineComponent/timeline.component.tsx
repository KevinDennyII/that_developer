import React from 'react';
import ExperienceItem from '../ExperienceComponent/ExperienceItem';

type Experience = {
  experience: [];
}

function TimelineComponent( {experience} : Experience ){
  return (
    <div>
      <section className="colorlib-experience" data-section="timeline">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">experience</span>
              <h2 className="colorlib-heading animate-box">Timeline</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                {experience.map((item, index) => (
                  <ExperienceItem item={item} key={index} display="timeline" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TimelineComponent;


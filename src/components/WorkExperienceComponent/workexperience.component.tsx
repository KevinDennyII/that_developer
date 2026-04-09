import React from 'react';
import ExperienceItem from '../ExperienceComponent/ExperienceItem';

type Experience = {
  experience: [];
}

function WorkExperienceComponent({experience}: Experience) {
  return (
    <div>
      <div className="row">
        <div
          className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
          data-animate-effect="fadeInLeft"
        >
          <span className="heading-meta">experience</span>
          <h2 className="colorlib-heading animate-box" style={{ marginBottom: '1em' }}>Timeline</h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              {experience.map((item, index) => (
                <ExperienceItem item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperienceComponent;


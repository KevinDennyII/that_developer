import React from 'react';
import { get } from 'lodash';
import months from './months';
import { descriptionTitle, descriptionBackground, panelHeadingBottomBorder, highlights }
  from './workexperience.module.scss';

type Experience = {
  experience: [];
}

type ExperienceItems = {
  isCurrentRole: boolean;
  position: string;
  company: string;
  summary: string;
  highlights: [];
  website: string;
  start: {month: number, year: number};
  end: {month: number, year: number};
}

type ExperienceDate = {
  month: number;
  year: number;
}

function WorkExperienceComponent({experience}: Experience) {
  const content = (description: string) => ({ __html: description });
  function startExperience(startExp: ExperienceDate) {
    const startMonth = months[`${get(startExp, 'month')}`];
    const startYear = get(startExp, 'year');
    return (
      <span style={{ fontStyle: 'italic', color: '#808080' }}>
        {startMonth.substring(0, 3)}
        {' '}
        {startYear}
      </span>
    );
  }
  function endExperience(exp: ExperienceItems, endExp: ExperienceDate) {
    const endMonth = months[`${get(endExp, 'month')}`];
    const endYear = get(endExp, 'year');

    if (exp.isCurrentRole) {
      return <span style={{ fontStyle: 'italic', color: '#808080' }}>Present</span>;
    } return (
      <span style={{ fontStyle: 'italic', color: '#808080' }}>
        {endMonth.substring(0, 3)}
        {' '}
        {endYear}
      </span>
    );
  }

  function experienceDescription(item: ExperienceItems){
    return (
      <>
        <span className={`${descriptionTitle}`}>
          {item?.position}
          {' '}
          at
          {' '}
          {item.company}
        </span>
        :
        {' '}
        {startExperience(item.start)}
        {' '}
        -
        {' '}
        {endExperience(item, item.end)}
      </>
    )
  }

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
              {experience.map((item: ExperienceItems, index: number) => (
                <div key={index} className="panel panel-default">
                  <div className={`panel-heading ${panelHeadingBottomBorder}`} role="tab" id={`heading${index}`}>
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                      >
                        {experienceDescription(item)}
                      </a>
                    </h4>
                  </div>
                  <div
                    id={`collapse${index}`}
                    className={`panel-collapse collapse ${descriptionBackground}`}
                    role="tabpanel"
                    aria-labelledby={`heading${index}`}
                  >
                    <span style={{ paddingLeft: '15px', fontSize: '1.4rem' }}><a href={item.website}>{item.website}</a></span>
                    <div style={{ fontSize: '1.5rem' }} className="panel-body" dangerouslySetInnerHTML={content(item.summary)} />
                    {!!item.highlights.length &&
                      <div className={`panel-body ${highlights}`}><strong>Highlights</strong>
                        <ul>
                          {item.highlights.map((highlight) => (
                              <li style={{ fontSize: '1.5rem' }} dangerouslySetInnerHTML={content(highlight)} />
                          ))}
                        </ul>
                      </div>
                    }


                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WorkExperienceComponent;

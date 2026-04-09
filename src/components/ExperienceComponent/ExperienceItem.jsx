import React from 'react';
import { get } from 'lodash';
import months from '../WorkExperienceComponent/months';

const ExperienceItem = ({ item, display }) => {
  const content = (description) => ({ __html: description });

  function startExperience(startExp) {
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

  function endExperience(exp, endExp) {
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

  function experienceDescription(item) {
    return (
      <>
        <span style={{fontSize: '20px', fontFamily: '\"Quicksand\", Arial, sans-serif', fontWeight: 500}}>
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

  if (display === 'timeline') {
    return (
      <article
        className="timeline-entry animate-box"
        data-animate-effect="fadeInLeft"
      >
        <div className="timeline-entry-inner">
          <div className="timeline-icon color-3">
            <i className="icon-pen2" />
          </div>
          <div className="timeline-label">
            <h2>
              {experienceDescription(item)}
            </h2>
            <div dangerouslySetInnerHTML={content(item.summary)} />
            <br />
            <ul>
              {item.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    )
  }

  return (
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id={`heading${item.company}`}>
        <h4 className="panel-title">
          <a
            className="collapsed"
            data-toggle="collapse"
            data-parent="#accordion"
            href={`#collapse${item.company}`}
            aria-expanded="false"
            aria-controls={`collapse${item.company}`}
          >
            {experienceDescription(item)}
          </a>
        </h4>
      </div>
      <div
        id={`collapse${item.company}`}
        className="panel-collapse collapse"
        role="tabpanel"
        aria-labelledby={`heading${item.company}`}
      >
        <div className="panel-body">
          <div className="row">
            <div className="col-md-12">
              <div dangerouslySetInnerHTML={content(item.summary)} />
            </div>
            <div className="col-md-12">
              <div style={{fontWeight: 'bold'}}>
                <ul>
                  {item.highlights.map((highlight, index) => (
                    <li key={index} style={{fontWeight: 'normal', fontStyle: 'italic'}}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceItem;

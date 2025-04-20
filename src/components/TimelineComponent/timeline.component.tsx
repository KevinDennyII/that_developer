import React from 'react';
import { get } from 'lodash';
import months from './months';
import './timeline.module.scss';
import ods from './ohhDennyData.json';

type Experience = {
  experience: [ExperienceItems];
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

function TimelineComponent( {experience} : Experience ){
  // grabbing OhhDenny Services LLC information
  function odsTitle(){ return {__html: ods.title }}
  function odsDateRange (){ return {__html: ods.dateRange }}
  function odsContent (){ return {__html: ods.content} }

  // grab the rest of the data experience
  const summaryTitle = experience.map((description) => {
    const jobTitle = description.position;
    const { company } = description;
    return `${jobTitle} at ${company}`;
  });
  const summary = experience.map((description) => description.summary);
  const highlights = experience.map((description) => description.highlights);

  const startExperience = experience.map((description) => {
    const startMonth = months[`${get(description.start, 'month')}`];
    const startYear = get(description.start, 'year');
    return `${startMonth.substring(0, 3)} ${startYear}`;
  });
  const endExperience = experience.map((description) => {
    const endMonth = months[`${get(description.end, 'month')}`];
    const endYear = get(description.end, 'year');
    if (description.isCurrentRole) {
      return 'Present';
    } return `${endMonth.substring(0, 3)} ${endYear}`;
  });

  function content(description: string) {return { __html: description }}

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
                        <div dangerouslySetInnerHTML={odsTitle()} />
                        <span dangerouslySetInnerHTML={odsDateRange()} />
                      </h2>
                      <div dangerouslySetInnerHTML={odsContent()} />
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInTop"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-4">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>
                        {summaryTitle[1]}
                        <br />
                        <span>
                          {startExperience[1]}
                          {' '}
                          -
                          {' '}
                          {endExperience[1]}
                        </span>
                      </h2>
                      <div dangerouslySetInnerHTML={content(summary[1])} />
                      {highlights[1].map((highlight, i) => (
                        <div dangerouslySetInnerHTML={content(highlight[i])} />
                      ))}
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>
                        {summaryTitle[2]}
                        <br />
                        <span>
                          {startExperience[2]}
                          {' '}
                          -
                          {' '}
                          {endExperience[2]}
                        </span>
                      </h2>
                      <div dangerouslySetInnerHTML={content(summary[2])} />
                      {highlights[2].map((highlight, i) => (
                        <div dangerouslySetInnerHTML={content(highlight[i])} />
                      ))}
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-6">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>
                        {summaryTitle[3]}
                        <br />
                        <span>
                          {startExperience[3]}
                          {' '}
                          -
                          {' '}
                          {endExperience[3]}
                        </span>
                      </h2>
                      <div dangerouslySetInnerHTML={content(summary[3])} />
                      {highlights[3].map((highlight, i) => (
                        <div dangerouslySetInnerHTML={content(highlight[i])} />
                      ))}
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-5">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>
                        Software Developer at Buchanan & Edwards, Inc
                        {' '}
                        <br />
                        <span>Nov 2013 - Oct 2014</span>
                      </h2>
                    </div>
                  </div>
                </article>
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
                        Software Developer at Creative Information Technology,
                        Inc
                        <br />
                        <span>May 2010 - Oct 2013</span>
                      </h2>
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-2">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>
                        Web Developer/IT Consultant at Intepros Federal
                        Consulting, Inc
                        <br />
                        <span>Sep 2009 - Apr 2010</span>
                      </h2>
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-1">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>
                        IT Specialist at IBM, Inc
                        {' '}
                        <br />
                        <span>Aug 2007 - Sep 2009</span>
                      </h2>
                    </div>
                  </div>
                </article>
                <article
                  className="timeline-entry begin animate-box"
                  data-animate-effect="fadeInBottom"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none" />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TimelineComponent;

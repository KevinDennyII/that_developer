import React from "react";
import months from "./months";
import { get } from "lodash";
import "./timeline.module.scss";
import ods from "./ohhDennyData.json";

const TimelineComponent = ({ experience }) => {
  // grabbing OhhDenny Services LLC information
  const odsTitle = () => {
    return { __html: ods.title };
  };
  const odsDateRange = () => {
    return { __html: ods.dateRange };
  };
  const odsContent = () => {
    return { __html: ods.content };
  };

  // grab the rest of the data experience
  const summary = experience.map((e) => {
    return e.summary;
  });
  console.log(summary)
  const startExperience = experience.map((e) => {
    const startMonth = months[`${get(e.start, "month")}`]
    const startYear = get(e.start, "year")
    return `${startMonth.substring(0, 3)} ${startYear}`;
  });
  console.log(startExperience)
  const endExperience = experience.map((e) => {
    const endMonth = months[`${get(e.end, "month")}`]
    const endYear = get(e.end, "year")
    if(typeof endMonth === 'undefined' && typeof endYear === 'undefined'){
      return `Present`
    } else return `${endMonth.substring(0, 3)} ${endYear}`;
  });
  console.log(endExperience)

  const content = (description) => {
    return { __html: description };
  };

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
                        Software Engineer at iHeartMedia, Inc <br />
                        <span>{startExperience[1]} - {endExperience[1]}</span>
                      </h2>
                      <div dangerouslySetInnerHTML={content(summary[1])} />
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
                        Lead Technologist at Booz Allen Hamilton, Inc <br />
                        <span>{startExperience[2]} - {endExperience[2]}</span>
                      </h2>
                      <div dangerouslySetInnerHTML={content(summary[2])} />
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
                        Senior Web Developer at Sevatec, Inc <br />
                        <span>{startExperience[3]} - {endExperience[3]}</span>
                      </h2>
                      <div dangerouslySetInnerHTML={content(summary[3])} />
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
                        Software Developer at Buchanan & Edwards, Inc <br />
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
                        IT Specialist at IBM, Inc <br />
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
};

export default TimelineComponent;

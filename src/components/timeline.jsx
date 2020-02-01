import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at iHeartMedia, Inc <span>Feb 2019 - present</span></h2>
                        <p>Currently working on iHeartMedia's Music Lab team. I assist in the maintaining and improving of a web application that assist in helping program directors of iHeartRadio stations determine how air time (spins) for songs will be distributed across radio stations. I am working as both a Software Engineer and Data Analytics team liaison on the Music Lab team. Some of my tasks include architecting solutions with NodeJS, automating AWS CodeBuilds using CloudWatch events for our MySQL databases, improving technical documentation, and learning both our data analytics and software development stack (ReactJS) for Music Lab.</p>
                          <p>I conducted a Proof of Concept analysis to present to VP of Data Engineering & Analytics for using an aiWare platform that uses GraphQL. This was an idea to help iHeartMedia automate the analysis of some of its market data like spots and digital impression</p>
                          <p>Previously apart of the Salesforce team, working with the Campaign Recap application which kept track of iHeartMedia's clients radio ad campaigns. I briefly worked with our Kibana instance in attempt to improve logging. I updated our software architecture. I also performed a technical analysis with Vertione One in using there development platform with GraphiQ that could possible help iHeartMedia automate some of its processes.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Director of Operations at OhhDenny Services, LLC <span>June 2015 - present</span></h2>
                        <p><a href="www.ohhdennyservices.com">OhhDenny Services, LLC</a></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Lead Technologist at Booz Allen Hamilton, Inc <span>Oct 2015 - Jan 2019</span></h2>
                        <p></p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

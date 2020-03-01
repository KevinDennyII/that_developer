import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
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
                          Software Engineer at iHeartMedia, Inc{" "}
                          <span>Feb 2019 - present</span>
                        </h2>
                        <p>
                          Currently working on iHeartMedia's Music Lab team. I
                          assist in the maintaining and improving of a web
                          application that assist in helping program directors
                          of iHeartRadio stations determine how air time (spins)
                          for songs will be distributed across radio stations. I
                          am working as both a Software Engineer and Data
                          Analytics team liaison on the Music Lab team. Some of
                          my tasks include architecting solutions with NodeJS,
                          automating AWS CodeBuilds using CloudWatch events for
                          our MySQL databases, improving technical
                          documentation, and learning both our data analytics
                          and software development stack (ReactJS) for Music
                          Lab.
                        </p>
                        <p>
                          I conducted a Proof of Concept analysis to present to
                          VP of Data Engineering & Analytics for using an aiWare
                          platform that uses GraphQL. This was an idea to help
                          iHeartMedia automate the analysis of some of its
                          market data like spots and digital impression
                        </p>
                        <p>
                          Previously apart of the Salesforce team, working with
                          the Campaign Recap application which kept track of
                          iHeartMedia's clients radio ad campaigns. I briefly
                          worked with our Kibana instance in attempt to improve
                          logging. I updated our software architecture. I also
                          performed a technical analysis with Vertione One in
                          using there development platform with GraphiQ that
                          could possible help iHeartMedia automate some of its
                          processes.
                        </p>
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
                          Director of Operations at{" "}
                          <a
                            href="https://www.ohhdennyservices.com"
                            style={{color: '#2c98f0'}}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            OhhDenny Services, LLC
                          </a>{" "}
                          <span>June 2015 - present</span>
                        </h2>
                        <p>
                          <p>
                            We assist smaller business, mostly concentrating on
                            HIPPA, with Cyber Security, Software & Hardware
                            Installation and Updates, and Network Configuration.
                            We also build websites using the technologies such
                            JavaScript, CSS3 & HTML5.{" "}
                          </p>
                          <p>
                            Network Upgrade for Ideal Nursing Services, Inc.:
                            For this project, I hired two other professionals to
                            assist with taking Ideal Nursing from a wired
                            network to a wireless network. Measurements of the
                            building were taken to create proper network
                            diagrams for approval by Ideal Nursing. Wires were
                            removed and Wireless Access Points (WAPs) were then
                            installed and configured. All machines were upgraded
                            and/or configured to connect to the WAPs. In
                            addition, a new rack with POE ports was installed in
                            their server room for their server, multi-port hub
                            and router. This created a more efficient working
                            space and alleviated unnecessary clutter.
                          </p>
                          <p>
                            Websites:
                            <ul>
                              <li>
                                <a
                                  href="https://menofcommunity.org/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Men of Community
                                </a>{" "}
                                - Sterling, VA
                              </li>
                              <li>
                                <a
                                  href="https://jacobdavidproperties.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Jacob David Properties, LLC
                                </a>{" "}
                                - Selma , TX
                              </li>
                              <li>
                                <a
                                  href="https://www.diamondgrovebaptist.com"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Diamond Grove Baptist Church, Inc
                                </a>{" "}
                                - Franklin, VA
                              </li>
                            </ul>
                          </p>
                        </p>
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
                          Lead Technologist at Booz Allen Hamilton, Inc{" "}
                          <span>Oct 2015 - Jan 2019</span>
                        </h2>
                        <p>Coming Soon...</p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
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
}

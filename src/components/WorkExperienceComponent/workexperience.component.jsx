import React from "react";
import months from "./months";
import { get } from "lodash";
import {descriptionTitle, descriptionWebsite} from "./workexperience.module.scss";
import ods from "./ohhDennyData.json";

const WorkExperienceComponent = ({ experience }) => {
  const content = (description) => {
    return { __html: description };
  };

  const startExperience = (startExp) => {
    const startMonth = months[`${get(startExp, "month")}`]
    const startYear = get(startExp, "year")
    return <span style={{fontStyle: "italic", color: "#808080"}}>{startMonth.substring(0, 3)} {startYear}</span>;
  };
  const endExperience = (exp, endExp) => {
    const endMonth = months[`${get(endExp, "month")}`]
    const endYear = get(endExp, "year")
    if(exp.isCurrentRole){
      return <span style={{fontStyle: "italic", color: "#808080"}}>Present</span>
    } else return <span style={{fontStyle: "italic", color: "#808080"}}>{endMonth.substring(0, 3)} {endYear}</span>;
  };

    return (
      <div>
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">experience</span>
            <h2 className="colorlib-heading animate-box">Timeline</h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                {experience.map((item, i) => (
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id={`heading${i}`}>
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href={`#collapse${i}`} aria-expanded="false"
                           aria-controls={`collapse${i}`}>
                          <span style={{descriptionTitle}}>{item.position} at {item.company}</span>:  {startExperience(item.start)} - {endExperience(item, item.end)}
                        </a>
                      </h4>

                    </div>
                    <div id={`collapse${i}`} className="panel-collapse collapse" role="tabpanel"
                         aria-labelledby={`heading${i}`}>
                      <span style={{paddingLeft: "15px", fontSize: "1.4rem", fontStyle: "italic"}}>Website: <a href={item.website}>{item.website}</a></span>
                      <div className="panel-body" dangerouslySetInnerHTML={content(item.summary)} />
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

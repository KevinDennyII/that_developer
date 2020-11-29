import React from "react";
import months from "./months";
import { get } from "lodash";
import "./workexperience.module.scss";
import ods from "./ohhDennyData.json";

const WorkExperienceComponent = ({ experience }) => {
  const content = (description) => {
    return { __html: description };
  };

  const startExperience = (startExp) => {
    const startMonth = months[`${get(startExp, "month")}`]
    const startYear = get(startExp, "year")
    return `${startMonth.substring(0, 3)} ${startYear}`;
  };
  const endExperience = (exp, endExp) => {
    const endMonth = months[`${get(endExp, "month")}`]
    const endYear = get(endExp, "year")
    if(exp.isCurrentRole){
      return `Present`
    } else return `${endMonth.substring(0, 3)} ${endYear}`;
  };

    return (
      <div>
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
                          {item.position} at {item.company}:  {startExperience(item.start)} - {endExperience(item, item.end)}
                        </a>
                      </h4>

                    </div>
                    <div id={`collapse${i}`} className="panel-collapse collapse" role="tabpanel"
                         aria-labelledby={`heading${i}`}>
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

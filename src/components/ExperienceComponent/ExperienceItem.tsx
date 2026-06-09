import React, { useState } from 'react';
import { get } from 'lodash';
import months from '../WorkExperienceComponent/months';

/** Shape matches gitconnected `work[]` entries used by ExperienceItem */
export interface ExperienceWorkItem {
  position?: string;
  company: string;
  start: { month?: number; year?: number };
  end?: { month?: number; year?: number };
  isCurrentRole?: boolean;
  summary: string;
  highlights: string[];
}

export interface ExperienceItemProps {
  item: ExperienceWorkItem;
  display: 'timeline' | 'accordion';
  accordionId?: string;
  accordionExpanded?: boolean;
  onAccordionToggle?: () => void;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  item,
  display,
  accordionId,
  accordionExpanded,
  onAccordionToggle,
}) => {
  /** Summary HTML is from bundled resume JSON (maintainer-controlled), not visitor input. */
  const trustedResumeHtml = (html: string) => ({ __html: html });

  const [localAccordionOpen, setLocalAccordionOpen] = useState(false);

  const isControlledAccordion =
    typeof accordionExpanded === 'boolean' && typeof onAccordionToggle === 'function';

  const accordionOpen = isControlledAccordion ? accordionExpanded : localAccordionOpen;

  const toggleAccordion = () => {
    if (isControlledAccordion) {
      onAccordionToggle();
    } else {
      setLocalAccordionOpen((v) => !v);
    }
  };

  function startExperience(startExp: ExperienceWorkItem['start']) {
    const startMonth = months[`${get(startExp, 'month')}` as keyof typeof months];
    const startYear = get(startExp, 'year');
    return (
      <span style={{ fontStyle: 'italic', color: '#808080' }}>
        {startMonth.substring(0, 3)}
        {' '}
        {startYear}
      </span>
    );
  }

  function endExperience(exp: ExperienceWorkItem, endExp: ExperienceWorkItem['end']) {
    const endMonth = months[`${get(endExp, 'month')}` as keyof typeof months];
    const endYear = get(endExp, 'year');

    if (exp.isCurrentRole) {
      return <span style={{ fontStyle: 'italic', color: '#808080' }}>Present</span>;
    }
    return (
      <span style={{ fontStyle: 'italic', color: '#808080' }}>
        {endMonth.substring(0, 3)}
        {' '}
        {endYear}
      </span>
    );
  }

  function experienceDescription() {
    return (
      <>
        <span
          style={{
            fontSize: '20px',
            fontFamily: '"Quicksand", Arial, sans-serif',
            fontWeight: 500,
          }}
        >
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
    );
  }

  function experienceBodyContent() {
    return (
      <>
        <div className="experience-summary" dangerouslySetInnerHTML={trustedResumeHtml(item.summary)} />
        {item.highlights.length > 0 && (
          <>
            <h4 className="experience-highlights__heading">Key responsibilities</h4>
            <ul className="experience-highlights__list">
              {item.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </>
        )}
      </>
    );
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
            <h2>{experienceDescription()}</h2>
            {experienceBodyContent()}
          </div>
        </div>
      </article>
    );
  }

  const panelId = accordionId || `collapse-${item.company}`.replace(/\s+/g, '-');

  return (
    <div className="panel panel-default">
      <div className="panel-heading" role="tab" id={`heading-${panelId}`}>
        <h4 className="panel-title">
          <a
            role="button"
            className={accordionOpen ? '' : 'collapsed'}
            href={`#collapse-${panelId}`}
            aria-expanded={accordionOpen}
            aria-controls={`collapse-${panelId}`}
            onClick={(e) => {
              e.preventDefault();
              toggleAccordion();
            }}
          >
            {experienceDescription()}
          </a>
        </h4>
      </div>
      <div
        id={`collapse-${panelId}`}
        className={`panel-collapse collapse${accordionOpen ? ' in' : ''}`}
        role="tabpanel"
        aria-labelledby={`heading-${panelId}`}
        aria-hidden={!accordionOpen}
      >
        <div className="panel-body">
          <div className="row">
            <div className="col-md-12">
              {experienceBodyContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;

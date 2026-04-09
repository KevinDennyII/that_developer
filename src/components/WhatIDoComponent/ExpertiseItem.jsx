import React from 'react';
import { services, desc, webDevelopment, dataStructures, devOps } from './whatido.module.scss';

const ExpertiseItem = ({ item }) => {
  const content = (description) => ({ __html: description });

  const colorMap = {
    'color-1': webDevelopment,
    'color-3': dataStructures,
    'color-5': devOps
  }

  return (
    <div className="col-md-4 text-center animate-box">
      <div className={`${services} ${colorMap[item.color]}`}>
        <span className="icon">
          <i className={item.icon} />
        </span>
        <div className={desc}>
          <h3>{item.title}</h3>
          <div dangerouslySetInnerHTML={content(item.description)} />
        </div>
      </div>
    </div>
  );
};

export default ExpertiseItem;

import React from 'react';
import ImageLazyLoader from './ImageLazyLoader';
import { container } from './about.module.scss';

const AboutItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={container}>
      {isEven ? (
        <>
          <ImageLazyLoader src={item.image} width={null} height="200px" alt={item.alt} />
          <p>{item.description}</p>
        </>
      ) : (
        <>
          <p>{item.description}</p>
          <ImageLazyLoader src={item.image} width={null} height="200px" alt={item.alt} />
        </>
      )}
    </div>
  );
};

export default AboutItem;

import React from 'react';
import useIntersectionObserver from '../useIntersectionObserver/useIntersectionObserver';

const LazyIframe = ({ title = 'Embedded content', ...props }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref}>
      {isIntersecting && <iframe title={title} {...props} />}
    </div>
  );
};

export default LazyIframe;

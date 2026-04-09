import React from 'react';
import useIntersectionObserver from '../useIntersectionObserver/useIntersectionObserver';

const LazyIframe = ({ ...props }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={ref}>
      {isIntersecting && <iframe {...props} />}
    </div>
  );
};

export default LazyIframe;

import React, { useRef, useEffect } from 'react';
import { get } from 'lodash';

/*
* Lazy loader for images and better performance on the browser
* */
const ImageLazyLoader = ({
  src, width, height, alt,
}) => {
  const ref = useRef(null);
  const io = useRef(null);

  useEffect(() => {
    // grabbing current reference of image load
    const current = get(ref, 'current');
    let ioCurrent;

    if (current) {
      // create an Observer that will ‘observe’ a DOM node and call a
      // callback when one or more of the thresholds are met
      io.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0.5) {
              ref.current.src = src;

              io.current.unobserve(current);
            }
          });
        },
        {
          threshold: [0, 0.5, 1],
        },
      );
      ioCurrent = get(io, 'current');
      ioCurrent.observe(current);
    }

    return () => {
      ioCurrent.unobserve(current);
    };
  }, [ref, src]);

  return <img ref={ref} width={width} height={height} alt={alt} />;
};

export default ImageLazyLoader;

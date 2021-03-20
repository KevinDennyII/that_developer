import React, { useRef, useEffect } from 'react';
import { get } from 'lodash';

const ImageLazyLoader = ({ src, width, height }) => {
  const ref = useRef(null);
  const io = useRef(null);

  useEffect(() => {
    const currentPath = get(ref, 'current');
    if (currentPath) {
      io.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0.5) {
              ref.current.src = src;

              io.current.unobserve(currentPath);
            }
          });
        },
        {
          threshold: [0, 0.5, 1],
        },
      );

      io.current.observe(ref.current);
    }

    return () => {
      io.current.unobserve(ref.current);
    };
  }, [ref]);

  return <img ref={ref} width={width} height={height} alt="" />;
};

export default ImageLazyLoader;

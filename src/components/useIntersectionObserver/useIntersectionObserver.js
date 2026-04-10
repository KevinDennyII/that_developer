import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;

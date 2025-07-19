import React from 'react';
import { useState, useEffect } from 'react';

export const useOnScreen = <T extends Element,>(ref: React.RefObject<T>, options: IntersectionObserverInit = { threshold: 0.3 }): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        // Optional: unobserve after it's visible once
        if (ref.current) {
            observer.unobserve(ref.current);
        }
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, options]);

  return isIntersecting;
};

export {};

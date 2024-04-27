// IntersectionAnimationTrigger.js
import React, { useEffect } from "react";

const IntersectionAnimationTrigger = ({ children, onInView }) => {
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        onInView();
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    // Start observing the target element
    observer.observe(document.getElementById("animated-element"));

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, [onInView]);

  return <div id="animated-element">{children}</div>;
};

export default IntersectionAnimationTrigger;

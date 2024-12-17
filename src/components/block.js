import React, { useEffect, useRef, useState } from 'react';
import '../App.css'; // Create a CSS file for animations

const Block = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    // Callback function moved inside useEffect
    const callbackFunction = ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true); // Set to true when the element is visible
      } else {
        setIsVisible(false); // Set to false when the element is not visible
      }
    };

    // Options for the IntersectionObserver
    const options = {
      threshold: 0.1, // Trigger when 10% of the component is in view
    };

    let observerRefValue = null; // Temporary variable for the ref value

    // Create the IntersectionObserver instance
    const observer = new IntersectionObserver(callbackFunction, options);

    // If the ref element exists, observe it
    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current;
    }

    // Cleanup function: unobserve when the component unmounts or ref changes
    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, []); // Empty dependency array ensures the effect runs once

  return (
    <div
      ref={ref}
      className={`scroll-animation ${isVisible ? 'fade-in' : ''}`}
    >
      {children}
    </div>
  );
};

export default Block;

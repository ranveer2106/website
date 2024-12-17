import React, { useEffect, useRef, useState } from 'react';
import '../App.css'; // Create a CSS file for animations

const Block = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    // Create the observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set to true when the element is visible
        } else {
          setIsVisible(false); // Set to false when the element is not visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is in view
      }
    );

    // Ensure ref.current exists before observing
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Clean up the observer
      }
    };
  }, []); // Empty dependency array ensures this runs once

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

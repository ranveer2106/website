import React, { useEffect, useRef, useState } from 'react';
import '../App.css'; // Create a CSS file for animations

const Block = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
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

      if (ref.current) {
          observer.observe(ref.current);
      }

      return () => {
          if (ref.current) {
              observer.unobserve(ref.current); // Clean up the observer
          }
      };
  }, []);

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
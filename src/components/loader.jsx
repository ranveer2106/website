// FontLoader.js
import React, { useEffect, useState } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import "./component.css"


const FontLoader = ({ children }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize the font observer
    const balooFont = new FontFaceObserver('Baloo Bhaijaan 2');

    // Load the font
    balooFont.load().then(() => {
      // Once the font is loaded, set fontLoaded to true
      setFontLoaded(true);
    }).catch((error) => {
      console.log('Font failed to load', error);
    });

    // Hide loader after 1 second (for smooth experience)
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timeoutId); // Clean up the timeout on component unmount
  }, []);

  if (loading) {
    return (
      // Full-screen loader while the font is loading
      <div className="loaderbox">
      <div className="loader">
        {/* <h1>

        Loading...
        </h1> */}
      </div>
      </div>
    );
  }

  if (!fontLoaded) {
    return (
      // You can optionally show a loading spinner or a fallback screen until the font is loaded
      <div className="loaderbox">
      <div className="loader">
        {/* <h1>

        Font loading...
        </h1> */}
      </div>
      </div>
    );
  }

  return (
    // Once the font is loaded, show the content
    <div className="content">
      {children}
    </div>
  );
};

export default FontLoader;

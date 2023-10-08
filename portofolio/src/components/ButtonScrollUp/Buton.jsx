import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <Button variant="primary" onClick={handleScrollUp}>
          Scroll to Top
        </Button>
      )}
    </>
  );
}

export default ScrollToTopButton;

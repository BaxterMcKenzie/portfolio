import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedText = () => {
  const linesRef = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline();
    linesRef.current.forEach((line, index) => {
      timeline.fromTo(
        line,
        { x: -150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1, // Entry duration
          ease: 'power2.out', // Smooth easing for entry
        },
        index * 0.7 // Staggered start times
      );
    });
  }, []);

  return (
    <div className="animated-text">
      {['Graphic Designer', 'Web Developer', 'Web Designer', 'Illustrator'].map((text, index) => (
        <div
          key={index}
          ref={(el) => (linesRef.current[index] = el)}
          className="animated-line"
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;

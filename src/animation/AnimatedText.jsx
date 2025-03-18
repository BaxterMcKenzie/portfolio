import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const AnimatedText = () => {
  const linesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timeline = gsap.timeline();
    linesRef.current.forEach((line, index) => {
      timeline.fromTo(
        line,
        { x: -150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
        },
        index * 0.7
      );
    });
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const items = [
    { text: 'Graphic Designers', path: '/designs' },
    { text: 'Graphic Designer', path: '/design' },
    { text: 'Web Developer', path: '/web' },
    { text: 'Web Designer', path: '/web' },
    { text: 'Illustrator', path: '/illustration' },
  ];
  
  const AnimatedText = () => {
    return (
      <div className="animated-text">
        {items.map((item, index) => (
          <div key={index} className="animated-line" data-text={item.text}>
            <span className={`visible-text ${item.text === 'Graphic Designers' ? 'invisible' : ''}`}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    );
  };
  
  
  return (
    <div className="animated-text">
      {items.map(({ text, path }, index) => (
        <div
          key={path}
          ref={(el) => (linesRef.current[index] = el)}
          className="animated-line"
          onClick={() => handleNavigation(path)}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;

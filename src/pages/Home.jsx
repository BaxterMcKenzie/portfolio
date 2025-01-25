import React from 'react';
import AnimatedText from '../animation/AnimatedText';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-body-container">
          <div className="background-image"></div>
          <div className="name">
            <img className="baxter" src="/home-img/name.svg" alt="Name Image" />
          </div>
        </div>
      </div>

      <div>
        <AnimatedText />
      </div>
    </>
  );
};

export default Home;

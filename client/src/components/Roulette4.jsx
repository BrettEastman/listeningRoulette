import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Roulette4 = () => {
  const [ isAnimating, setIsAnimating ] = useState(false);
  const [ isSpinning, setIsSpinning ] = useState(false)

  useEffect(() => {
    if (isSpinning) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
        setIsSpinning(false);
      }, 3000);
    }
  }, [isSpinning]);

  return (
    <Container>
      <Wheel style={{animationPlayState: (isAnimating || isSpinning) ? "running" : "paused"}}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </Wheel>
      <button onClick={() => setIsSpinning(true)}>Spin</button>
    </Container>
  );
};

const Container = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
`
const Wheel = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  border: 10px solid #333;
  animation: spin 3s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  animation-play-state: running;
  overflow: hidden;

  @keyframes spin {
    100% {
      transform: rotate(${360 + getRandomInt(0, 5) * 72}deg);
    }
  }
`;

const Section = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  transform-origin: center;
`;

const Section1 = styled(Section)`
  background-color: red;
  transform: rotate(0deg);
`;
const Section2 = styled(Section)`
  background-color: blue;
  transform: rotate(72deg);
`;
const Section3 = styled(Section)`
  background-color: red;
  transform: rotate(144deg);
`;
const Section4 = styled(Section)`
  background-color: blue;
  transform: rotate(216deg);
`;
const Section5 = styled(Section)`
  background-color: red;
  transform: rotate(288deg);
`;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


export default Roulette4;

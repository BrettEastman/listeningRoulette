import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Roulette3 = () => {
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
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </Wheel>
      <button onClick={() => setIsSpinning(true)}>Spin</button>
    </Container>
  );
};

const Container = styled.div`
  width: 200px;
  height: 200px;
  position: relative;

  div {
    width: 100%;
    height: 100%;
    clip-path: polygon(
      30% 0%,
      100% 30%,
      30% 100%,
      0% 30%
    );
  }
`;

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

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

    &:nth-child(1) {
      transform: rotate(0deg);
      background-color: #e74c3c;
    }

    &:nth-child(2) {
      transform: rotate(72deg);
      background-color: #f1c40f;
    }

    &:nth-child(3) {
      transform: rotate(144deg);
      background-color: #2ecc71;
    }

    &:nth-child(4) {
      transform: rotate(216deg);
      background-color: #3498db;
    }

    &:nth-child(5) {
      transform: rotate(288deg);
      background-color: #9b59b6;
    }
  }
`;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


export default Roulette3;

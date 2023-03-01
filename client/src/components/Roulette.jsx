import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

export default function Roulette6({ albums }) {
  const [ number, setNumber ] = useState(0);
  const [ spinningStopped, setSpinningStopped ] = useState(true)
  const containerRef = useRef(null)
  const oneRef = useRef(null)
  const twoRef = useRef(null)
  const threeRef = useRef(null)
  const fourRef = useRef(null)
  const fiveRef = useRef(null)
  const sixRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      // you have access to the container. Gives you info that may be useful. Similar to document.querySelector although it may need to load once first, which is why we have the useEffect.
      // show me the thing that is closest to the stopper.
       // could potentially use useRef to determine which container has the highest Y coordinate to determine the winner
      console.log('containerRef getBounding: ', containerRef.current.getBoundingClientRect()); //getBoundingClientRect is a property of html elements
    }
  }, [spinningStopped])

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const btnOnClick = function () {
    setNumber(getRandomInt(3000, 10000));
    setNumber(number + Math.ceil(Math.random() * 10000));
    setTimeout(() => {
      setSpinningStopped(!spinningStopped);
    }, 3001)
  };

  return (
    <Container>
      <div className="container" ref={containerRef} style={{ transform: `rotate(${number}deg)`}}>
        <div className="one">{albums[0]?.album}</div>
        <div className="two">{albums[1]?.album}</div>
        <div className="three">{albums[2]?.album}</div>
        <div className="four">{albums[3]?.album}</div>
        <div className="five">{albums[4]?.album}</div>
        <div className="six">{albums[5]?.album}</div>
      </div>
      {/* <span className="mid"></span> */}
      <button
        id="spin" onClick={() => {
          btnOnClick();
        }}>Spin</button>
      <div className="stopper"></div>
    </Container>
  );
}

const Container = styled.div`
  .container {
    height: 350px;
    width: 350px;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 10px hsl(358deg 99% 24% /.3);
    transition: 3s all;
    border: 1px solid black;
  }
  .container div {
    height: 50%;
    width: 200px;
    clip-path: polygon(100% 0, 50% 100%, 0 0);
    transform: translateX(-50%);
    transform-origin: bottom;
    position: absolute;
    left: 21%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: inherit;
    font-weight: 1000;
    transform-origin: bottom;
    color: black;
    writing-mode: vertical-rl;
  }
  .container .one {
    background: hsla(204deg 70% 70% / .9);
    left: 50%;
  }
  .container .two {
    background: hsla(204deg 70% 66% / .9);
    transform: rotate(60deg);
  }
  .container .three {
    background: hsla(204deg 70% 62% / .9);
    transform: rotate(120deg);
  }
  .container .four {
    background: hsl(358deg 99% 64% /.3);
    transform: rotate(180deg);
  }
  .container .five {
    background: hsl(358deg 99% 54% /.3);
    transform: rotate(240deg);
  }
  .container .six {
    background: hsl(358deg 99% 44% /.3);
    transform: rotate(300deg);
  }

  #spin {
    height: 20px;
    width: 60px;
    background: hsl(358deg 99% 64% /.3);
    position: absolute;
    margin-top: 20px;
    margin-left: 147px;
    font-size: 10px;
    color: black;
    font-weight: 1000;
    letter-spacing: 4px;
    border: 1px solid black;
    cursor: pointer;
    box-shadow: 0 5px 10px hsl(358deg 99% 24% /.3);
    transition: 0.2s all;
  }
  #spin:hover {
    box-shadow: none;
  }
  .stopper {
    height: 20px;
    width: 15px;
    background: hsl(358deg 99% 64% /.3);
    /* position: absolute; */
    clip-path: polygon(100% 0, 50% 100%, 0 0);
    margin-top: -370px;
    margin-left: 165px;
  }
`;

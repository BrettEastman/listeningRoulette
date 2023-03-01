import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

export default function Roulette6() {
  const [ number, setNumber ] = useState(0);
  const [ spinningStopped, setSpinningStopped ] = useState(true)
  const containerRef = useRef(null)
  useEffect(() => {
    if (containerRef.current) {
      // you have access to the container. Gives you info that may be useful. Similar to document.querySelector although it may need to load once first, which is why we have the useEffect.
      console.log(containerRef.current.getBoundingClientRect()); //getBoundingClientRect is a property of html elements
    }
  }, [spinningStopped])

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  console.log(containerRef)
  const btnOnClick = function () {
    setNumber(getRandomInt(3000, 10000));
    // setNumber((prev) => {
    //   return prev + Math.ceil(Math.random() * 10000)
    // })
    setNumber(number + Math.ceil(Math.random() * 10000));
    setTimeout(() => {
      setSpinningStopped(!spinningStopped);
    }, 3001)
  };

  // could potentially use useRef to determine which container has the highest Y coordinate to determine the winner
  return (
    <Container>
      <div className="container" ref={containerRef} style={{ transform: `rotate(${number}deg)`}}>
        <div className="one">1</div>
        <div className="two">2</div>
        <div className="three">3</div>
        <div className="four">4</div>
        <div className="five">5</div>
        <div className="six">6</div>
      </div>
      <span className="mid"></span>
      <button
        id="spin" onClick={() => {
          btnOnClick();
        }}>Spin</button>
      <div className="stoper"></div>
    </Container>
  );
}

const Container = styled.div`
  .container {
    height: 350px;
    width: 350px;
    background: white;
    /* position: relative; */
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 10px gray;
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
    font-size: 20px;
    font-family: monospace;
    font-weight: 1000;
    transform-origin: bottom;
    color: white;
    writing-mode: vertical-rl;
  }
  .container .one {
    background: hsla(204deg 70% 66% / .9);
    left: 50%;
  }
  .container .two {
    background: #4ed4c6;
    transform: rotate(60deg);
  }
  .container .three {
    background: #baf4ee;
    transform: rotate(120deg);
  }
  .container .four {
    background: #4ed4c6;
    transform: rotate(180deg);
  }
  .container .five {
    background: #baf4ee;
    transform: rotate(240deg);
  }
  .container .six {
    background: #4ed4c6;
    transform: rotate(300deg);
  }
  .mid {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    position: absolute;
    background: #008276;
  }
  #spin {
    height: 60px;
    width: 200px;
    background: #4ed4c6;
    position: absolute;
    margin-top: 20px;
    font-size: 30px;
    color: white;
    font-weight: 1000;
    letter-spacing: 4px;
    border: 1px solid white;
    cursor: pointer;
    box-shadow: 0 5px 10px gray;
    transition: 0.2s all;
  }
  #spin:hover {
    box-shadow: none;
  }
  .stoper {
    height: 50px;
    width: 40px;
    background: #ffd600;
    position: absolute;
    clip-path: polygon(100% 0, 50% 100%, 0 0);
    margin-top: -350px;
  }
`;

// show me the thing that is closest to the stopper. I
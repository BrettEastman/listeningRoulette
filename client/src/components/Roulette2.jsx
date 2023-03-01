import React from 'react';
import styled from 'styled-components';

const Roulette2 = () => {
  return (
    <Container>
      <div class="one">Person1</div>
      <div class="two">Person2</div>
      <div class="three">Person3</div>
      <div class="four">Person4</div>
      <div class="five">Person5</div>
    </Container>
  );
};

const Container = styled.div`
  width: 350px;
  height: 350px;
  background: #4ed4c6;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 10px grey;
  transition: 3s all;
  div {
    height: 50%;
    width: 100px;
    clip-path: polygon(100% 0,50% 100%, 0 0);
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
    /*color:#008276; */
    box-shadow: inset 0 10px 10px gray;
    writing-mode: vertical-rl;
  }
  .one{
    background: red;
    left: 50%;
  }
  .two{
    background: white;
    transform: rotate(72deg)
    color: red;
  }
  .three{
    background: red;
    transform: rotate(144deg)
  }
  .four{
    background: white;
    transform: rotate(216deg)
    color: red;
  }
  .five{
    background: red;
    transform: rotate(288deg)
  }
`;


export default Roulette2;

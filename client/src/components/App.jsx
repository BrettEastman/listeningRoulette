import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from '../GlobalStyles.js';
import Form from './Form.jsx';
import Feed from './Feed.jsx';
import Roulette from './Roulette.jsx';
import exampleData from './tests/exampleData';

const App = () => {
  const [ messages, setMessages ] = useState(exampleData);
  // console.log(messages);
  const handleSubmit = () => {
    console.log('handle submit')
  }
  return (
    <div>
      <GlobalStyles />
      <Title>Listening Roulette</Title>
      <Container>
        <div>
          <Form />
        </div>
        <Feed messages={messages}/>
        <RouletteWrapper>
          <Roulette />
        </RouletteWrapper>
      </Container>
    </div>
  );
};

const Title = styled.h1`
  font-family: 'Cedarville Cursive', cursive;
  color: #F02127;
  opacity: 0.8;
  font-size: 5rem;
  text-shadow: 1px 1px 2px black;
  padding-bottom: 1.5rem;
  margin-left: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: inherit;
`;

const RouletteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export default App;

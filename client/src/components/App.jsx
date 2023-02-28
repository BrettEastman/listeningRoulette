import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from '../GlobalStyles.js';
import Form from './Form.jsx';
import Feed from './Feed.jsx';
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
      <Form />
      <Feed messages={messages}/>
    </div>
  )
}

const Title = styled.h1`
  font-family: 'Cedarville Cursive', cursive;
  color: #F02127;
  opacity: 0.8;
  font-size: 5rem;
  text-shadow: 1px 1px 2px black;
`;

export default App;

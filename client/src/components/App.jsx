import React from 'react';
import styled from 'styled-components';
import Form from './Form.jsx';

const App = () => {
  const handleSubmit = () => {
    console.log('handle submit')
  }
  return (
    <div>
      <Title>Hello World!</Title>
      <Form />
    </div>
  )
}

const Title = styled.div`
  font-family: 'Cedarville Cursive', cursive;
`;

export default App;

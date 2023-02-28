import React from 'react';
import GlobalStyles from '../GlobalStyles.js'
import styled from 'styled-components';

const App = () => {
  return (
    <div>
      <Title>Hello World!</Title>
    </div>
  )
}

const Title = styled.div`
  font-family: 'Cedarville Cursive', cursive;
`;

export default App;

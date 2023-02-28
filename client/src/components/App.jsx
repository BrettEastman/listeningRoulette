import React from 'react';
import GlobalStyles from '../GlobalStyles.js'
import styled from 'styled-components';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <div>Hello World!</div>
    </div>
  )
}

figure out global styles vs. styled components
const Title = styled.div`
  font-family: 'Cedarville Cursive', cursive;
`;

export default App;

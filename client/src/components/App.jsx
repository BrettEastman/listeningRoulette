import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import GlobalStyles from '../GlobalStyles.js';
import Form from './Form.jsx';
import AlbumList from './AlbumList.jsx';
import Feed from './Feed.jsx';
import Roulette from './Roulette.jsx';
import exampleData from './tests/exampleData';

const App = () => {
  const [ messages, setMessages ] = useState(exampleData);
  const [ albums, setAlbums ] = useState({});
  const [viewState, setViewState] = useState(0);

  const getAll = () => {
    return axios.get('/lr');
  }

  const fetchAll = () => {
    getAll()
      .then(({ data }) => {
        setAlbums(data);
      })
      .catch((error) => {
        console.log('fetch error: ', error)
      });
  };

  useEffect(() => {
    fetchAll()}, []);

  const handleSubmit = (obj) => {
    axios({
      method: 'post',
      url: '/lr',
      data: obj
    })
    .then((response) => {
      fetchAll()
    })
    .catch((error) => {
      console.log('post error: ', error)
    });
  };

  return (
    <div>
      <GlobalStyles />
      <Title>Listening Roulette</Title>
      <Container>
        {viewState === 0 && (<div>
          <Form handleSubmit={handleSubmit}/>
          <AlbumList albums={albums}/>
        </div>)}
        {viewState === 1 && (<Feed messages={messages}/>)}
        <RouletteWrapper>
          <Roulette albums={albums} viewState={viewState} setViewState={setViewState}/>
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

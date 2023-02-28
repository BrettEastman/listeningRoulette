import React from 'react';
import styled from 'styled-components';
import MessageItem from './MessageItem';

const Feed = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => {
        return <UnorderedList><MessageItem name={message.name} body={message.body} time={message.timeStamp}/></UnorderedList>
      })}
    </div>
  )
};

const UnorderedList = styled.ul`
  border: 0.5px solid green;
  padding: 10px;
  margin: 10px;
`

export default Feed;

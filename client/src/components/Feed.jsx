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
  border: 0.5px dashed 	hsl(358, 87%, 24%);
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0.5rem;
`

export default Feed;

import React from 'react';
import MessageItem from './MessageItem';

const Feed = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => {
        return <ul><MessageItem name={message.name} body={message.body} time={message.timeStamp}/></ul>
      })}
    </div>
  )
};

export default Feed;

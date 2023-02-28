import React from 'react';
import { ImSmile2 } from "react-icons/im";

const MessageItem = ({ name, body, time }) => {
  return (
    <>
      <div>
        <span>{name}</span>
        <span>{time}</span>
      </div>
      <div>
        <p>{body}</p>
        <span><ImSmile2 /></span>
      </div>
    </>
  )
};

export default MessageItem;

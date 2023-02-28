import React from 'react';
import styled from 'styled-components';
import { RiHeartFill, RiEmotionLaughFill, RiEmotionNormalFill } from "react-icons/ri";
import { HiOutlineHand } from "react-icons/hi";

const MessageItem = ({ name, body, time }) => {
  return (
    <MessageWrapper>
      <div>
        <span>{name}</span>
        <span>{time}</span>
      </div>
      <div>
        <p>{body}</p>
        <MessageFooter>
          <span><RiHeartFill /></span>
          <span><RiEmotionLaughFill /></span>
          <span><HiOutlineHand /></span>
          <span><RiEmotionNormalFill /></span>
        </MessageFooter>
      </div>
    </MessageWrapper>
  );
};

const MessageWrapper = styled.div`
  font-family: inherit;
  background-color: hsl(358deg 99% 64% /.3);
`

const MessageFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export default MessageItem;

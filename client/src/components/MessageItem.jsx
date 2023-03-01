import React from 'react';
import styled from 'styled-components';
import { RiHeartFill, RiEmotionLaughFill, RiEmotionNormalFill } from "react-icons/ri";
import { HiOutlineHand } from "react-icons/hi";

const MessageItem = ({ name, body, time }) => {
  return (
    <MessageWrapper>
      <div>
        <Span>{name}</Span>
        <span>{time}</span>
      </div>
      <div>
        <p>{body}</p>
        <MessageFooter>
          <EmotoSpan><RiHeartFill /></EmotoSpan>
          <EmotoSpan><RiEmotionLaughFill /></EmotoSpan>
          <EmotoSpan><HiOutlineHand /></EmotoSpan>
          <EmotoSpan><RiEmotionNormalFill /></EmotoSpan>
        </MessageFooter>
      </div>
    </MessageWrapper>
  );
};

const MessageWrapper = styled.div`
  font-family: inherit;
  background: radial-gradient(hsl(358deg 99% 84% /.3), hsl(358deg 99% 64% /.3));
  text-shadow: 0.5px 0.5px hsla(204deg 70% 86% / .9);
  border-radius: 8px;
  padding: 5px;
  margin: 5px;
`;

const Span = styled.span`
  font-weight: 600;
`;

const EmotoSpan = styled.span`
  cursor: pointer;
  &:hover {
    color: hsla(204deg 90% 66% / .9);
  }
`;

const MessageFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5px;
  margin: 5px;
`;

export default MessageItem;

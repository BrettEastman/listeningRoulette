import React from 'react';
import styled from 'styled-components';

const MessageItem = ({ name, body, time }) => {
  return (
    <MessageWrapper>
      <div>
        <Span>{name}</Span>
      </div>
      <div>
        <P>{body}</P>
        <MessageFooter>
          <EmotoSpan>❤️</EmotoSpan>
          <EmotoSpan>🤣</EmotoSpan>
          <EmotoSpan>🙌</EmotoSpan>
          <EmotoSpan>🫥</EmotoSpan>
          <EmotoSpan>👏</EmotoSpan>
          <EmotoSpan>🎯</EmotoSpan>
        </MessageFooter>
      </div>
    </MessageWrapper>
  );
};

const MessageWrapper = styled.div`
  font-family: inherit;
  font-size: 1.2rem;
  background: radial-gradient(hsl(358deg 99% 84% /.3), hsl(358deg 99% 64% /.3));
  text-shadow: 0.5px 0.5px hsla(204deg 70% 66% / .9);
  border-radius: 8px;
  padding: 5px;
  box-shadow: 0 2px 4px hsl(358deg 99% 24% /.3);
  margin: 5px;
`;

const Span = styled.span`
  font-weight: 600;
`;

const P = styled.p`
  font-size: 1rem;
`;

const EmotoSpan = styled.span`
  cursor: pointer;
  &:hover {
    transform: scale(1.25);
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

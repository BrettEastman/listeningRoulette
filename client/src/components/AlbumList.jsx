import React from 'react';
import styled from 'styled-components';

const AlbumList = ({ albums }) => {

  return (
    <AListWrapper><strong>Current Picks:</strong>
      {albums[0]?.name !== undefined ? (albums.map((album) => {
        return <ol key={album._id}>{`${album?.name}: ${album?.album}`}</ol>
      })) : null}
    </AListWrapper>
  );
};

const AListWrapper = styled.div`
  font-size: 1rem;
  text-shadow: 0.5px 0.5px hsla(204deg 70% 66% / .9);
  padding: 1rem;
  margin: .5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: radial-gradient(hsl(358deg 99% 84% /.3), hsl(358deg 99% 64% /.3));
  margin-top: 2.8rem;
  box-shadow: 0 2px 4px hsl(358deg 99% 24% /.3);
  transform: scale(1.1);
  ol {
    padding-left: 0;
    &::before {
      content: '├ ';
    }
  }
`;

export default AlbumList;

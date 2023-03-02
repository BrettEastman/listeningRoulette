import React from 'react';
import styled from 'styled-components';

const AlbumList = ({ albums }) => {

  return (
    <AListWrapper>Current Picks:
      {albums[0]?.name !== undefined ? (albums.map((album) => {
        return <ol key={album._id}>{`${album?.name}: ${album?.album}`}</ol>
      })) : null}
    </AListWrapper>
  );
};

const AListWrapper = styled.div`
  font-size: 12px;
  text-shadow: 0.5px 0.5px hsla(204deg 70% 66% / .9);
  padding: .5rem;
  margin: .5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: radial-gradient(hsl(358deg 99% 84% /.3), hsl(358deg 99% 64% /.3));
  margin-left: 12px;
  margin-top: 24px;
  box-shadow: 0 2px 4px hsl(358deg 99% 24% /.3);
`;

export default AlbumList;

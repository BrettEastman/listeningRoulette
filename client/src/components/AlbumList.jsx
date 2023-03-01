import React from 'react';
import styled from 'styled-components';

const AlbumList = ({ albums }) => {

  return (
    <AListWrapper>Current Picks:
      {albums[0]?.name !== undefined ? (albums.map((album) => {
        return <li>{`${album?.name}: ${album?.album}`}</li>
      })) : null}
    </AListWrapper>
  );
};

const AListWrapper = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
  margin-top: 24px;
`;

export default AlbumList;

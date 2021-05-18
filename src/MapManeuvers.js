import React from 'react';
import styled from 'styled-components';
const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(10, 0, 0, 0.2);
  border-radius: 5px;
  padding: 5px 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Poster = styled.img`
  width: 40px;
  height: 40px;
`;

const Turn = styled.article`
  width: 350px;
  height: 40px;
  font-size: 15px;
  padding-left: 15px;
`;
const Info = styled.article`
  width: 100px;
  font-size: 12px;
`;

function MapManeuvers({ mapManeuvers }) {
  return (
    <>
      <Card>
        <ul>
          {mapManeuvers.map((item) => (
            <Card>
              <Poster src={item.iconUrl} />
              <Turn>
                <div>
                  <a href={`${item.index}`}>{item.narrative}</a>
                </div>
              </Turn>
              <Info>
                Mile: {item.distance}
                <br />
                Time: {item.formattedTime}
                <br />
                Short: {item.directionName}
              </Info>
            </Card>
          ))}
        </ul>
      </Card>
    </>
  );
}

export default MapManeuvers;

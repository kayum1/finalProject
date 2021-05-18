import React from 'react';
import styled from 'styled-components';

import './App.css';

const Card = styled.span`
  box-shadow: 0 4px 8px 0 rgba(10, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px 10px;
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #f8fafa;
  text-align: left;
  font-size: 12px;
  font-family: Roboto;
`;
function MapSummary({ mapSummary }) {
  return (
    <>
      <Card>
        <span>Distance: {mapSummary.distance}</span>
        <span>Fuel Used: {mapSummary.fuelUsed}</span>
        <span>Time: {mapSummary.formattedTime}</span>
        <span>Toll: {mapSummary.hasTollRoad}</span>
      </Card>
    </>
  );
}
export default MapSummary;

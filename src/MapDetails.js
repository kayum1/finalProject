import React from 'react';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import MapSummary from './MapSummary';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(10, 0, 0, 0.2);
  border-radius: 5px;
  padding: 5px 5px;
  width: 100%;
  display: grid;
`;
const Poster = styled.img`
  width: 300px;
  height: 300px;
`;

function MapDetails({ mapDetails }) {
  const { id } = useParams();
  const PREV = Number(id) < 1 ? 0 : Number(id) - 1;
  const NEXT =
    Number(id) < mapDetails.length - 2 ? Number(id) + 1 : mapDetails.length - 2;
  var details = '';

  mapDetails.forEach((element) => {
    if (element.index == id) {
      details = element;
    }
  });
  return (
    <>
      <MapSummary mapSummary={details} />
      <Card>
        <Poster src={details.mapUrl} />
        <div>
          <button>
            <a href={`${PREV}`}>Prev</a>
          </button>
          &nbsp;
          <button>
            <a href={`${NEXT}`}>Next</a>
          </button>
        </div>
      </Card>
    </>
  );
}

export default MapDetails;

import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(10, 0, 0, 0.2);
  border-radius: 5px;
  padding-bottom: 20px;
  grid-gap: 20px;
  display: grid;
  background-color: #f8f9f9;
  text-align: left;
`;
function DirectionForm() {
  const [currentLocation, setCurrentLocation] = useState(''); // Penn Station, NY
  const [destinationLocation, setDestinationLocation] = useState(''); // Miami, FL

  function handleSubmit(event) {
    event.preventDefault();
    setCurrentLocation(event.target.currentLocation.value);
    setDestinationLocation(event.target.destinationLocation.value);
  }

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit} method='GET' action='/id'>
          <div>
            <label htmlFor='Current Location'>Current Location</label>
            <input
              id='currentLocation'
              name={currentLocation}
              type='text'
              required
              value={currentLocation}
              placeholder='Street, City, State, or Zipcode'
              onChange={(e) => setCurrentLocation(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='Destination Location'>Destination Location</label>
            <input
              id='destinationLocation'
              name={destinationLocation}
              type='text'
              required
              value={destinationLocation}
              placeholder='Street, City, State, or Zipcode'
              onChange={(e) => setDestinationLocation(e.target.value)}
            />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default DirectionForm;

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { URL, API_KEY } from './const';
import DirectionForm from './DirectionForm';
import MapManeuvers from './MapManeuvers';
import MapSummary from './MapSummary';
import MapDetails from './MapDetails';
import { Wrapper } from './styles';
import './App.css';
import Nav from './Nav';
//

const CurrentLocation = '34th street penn station';
const Destination = 'Miami, FL';
const detailsRequest = `${URL}?key=${API_KEY}&from=${CurrentLocation}&to=${Destination}",`;

function App(props) {
  const [details, setDetails] = useState([]);
  const [detailsDirections, setDetailsDirections] = useState([]);
  //const { data } = this.state;
  //const id = useParams();

  console.log('=== PROPS ', props);
  useEffect(() => {
    fetch(detailsRequest)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data.route);
        setDetailsDirections(data.route.legs[0].maneuvers);
      })
      .catch((error) => {
        // handle your errors here
        console.error(error);
      });
  }, []);

  return (
    <Wrapper>
      <div className='App'>
        <Router>
          <Nav />
          <Switch>
            <Route exact path='/'>
              <DirectionForm />
              <MapSummary mapSummary={details} />
            </Route>
            <Route exact path='/list'>
              <MapSummary mapSummary={details} />
              <MapManeuvers mapManeuvers={detailsDirections} />
            </Route>
            <Route path='/:id'>
              <MapDetails mapDetails={detailsDirections} />
            </Route>
          </Switch>
        </Router>
      </div>
    </Wrapper>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movie from './Movie';
import { URL_DETAIL, API_KEY } from './const'; //https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id
import PopularMovies from './PopularMovies';

const currentID = 495764;

const detailsRequest = `${URL_DETAIL}${currentID}?api_key=${API_KEY}&language=en-US`;

function App() {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(detailsRequest)
      .then((response) => response.json())
      .then((json) => setDetails(json));
  }, []);
  return (
    <div className='App'>
      <header>
        <h1>Movies</h1>
      </header>
      <Router>
        <Switch>
          <Route exact path='/'>
            <PopularMovies />
          </Route>
          <Route path='/movie/:movieId'>
            <Movie details={details} />
          </Route>
        </Switch>
      </Router>

      {/* <pre>{JSON.stringify(details, null, 2)}</pre> */}
    </div>
  );
}

export default App;

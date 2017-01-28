import React from 'react';
import { Link } from 'react-router';

const PinnedWeather = ({ state, id }) =>
{
  let sp = ' '
  return (
    <div className="pinned-weather">
      {state[id] ?
        <Link className="a-pinned" to={`/forecast/${id}`}>
          <div className='current-pinned a-pinned'>
            <span className='pinned-city'>
              {state[id].data.current_observation.display_location.full}{sp}
            </span>
            <span className='pinned-observation'>
              {state[id].data.current_observation.temp_f}&deg;{sp}
              {state[id].data.current_observation.weather}
            </span>
          </div>
        </Link>
        :
        <Link className="a-pinned" to="/settings">
          Save a New City
        </Link>
      }
    </div>
  )
}



export default PinnedWeather

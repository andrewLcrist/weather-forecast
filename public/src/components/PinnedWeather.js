import React from 'react';
import { Link } from 'react-router';

const PinnedWeather = ({ state, id }) =>
{
  let sp = ' '
  let img = "../../public/styles/images/"
  let cityArray = [img + '1.png',img + '2.png',img + '3.png',img + '4.png',img + '5.png',img + '6.png',img + '7.png',img + '8.png', img + '9.png']
  const random = Math.floor(Math.random() * (8 - 1) + 1)
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
        <div className="a-pinned">
        <Link className="new-city" to="/settings">
          Save a New City
        </Link>
        <img src={cityArray[random]} width="100%"/>
        </div>
      }
    </div>
  )
}



export default PinnedWeather

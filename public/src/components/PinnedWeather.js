import React from 'react';
import { Link } from 'react-router';

const PinnedWeather = ({ state, id }) =>
{
  let sp = ' '
  let img = "https://andrewlcrist.github.io/weather-forecast/public/styles/images/"
  let cityArray = [img + '1.png',img + '2.png',img + '3.png',img + '4.png',img + '5.png',img + '6.png',img + '7.png',img + '8.png', img + '9.png']
  const random = Math.floor(Math.random() * 9)
  return (
    <div className="pinned-weather">
      {state[id] ?
        <div className="a-pinned">
        <img className="city" alt="Picture of city" src={cityArray[random]} width="100%"/>
        <Link className="new-city" to={`/forecast/${id}`}>
          <div className='float-image-text'>
            <span className='pinned-city'>
              {state[id].data.current_observation.display_location.full}{sp}
            </span>
            <span className='pinned-observation'>
              {Math.floor(state[id].data.current_observation.temp_f)}&deg;{sp}
              {state[id].data.current_observation.weather}
            </span>
          </div>
        </Link>
        </div>
        :
        <div className="a-pinned">
        <img className="city" alt="Picture of city" src={cityArray[random]} width="100%"/>
        <Link className="new-city" to="/settings">
          <p className="float-image-text">ADD NEW CITY</p>
        </Link>
        </div>
      }
    </div>
  )
}



export default PinnedWeather

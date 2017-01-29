import React from 'react'
import { Link } from 'react-router'

const Forecast = ({ state, local, params }) => {
  let data
  let name
  let id = params.id

  if (id >= 0) {
    name = state[id].data.current_observation.display_location.full
    data = state[id].data.forecast.simpleforecast.forecastday
  } else {
    name = local.current_observation.display_location.full
    data = local.forecast.simpleforecast.forecastday
  }

  let sp = ' '

  return (
    <div className="extended-forecast-container">
      <h1 id='name'>
        {name}
      </h1>
      <table className='extended-container'>
        {data.map((item, index) => {
          return (
              <tr className='day'>
                  <td className='weekday'>
                    {item.date.weekday}
                  </td>
                  <td className='month-name'>
                    <span>{item.date.monthname}{sp}
                    {item.date.day},{sp}
                    {item.date.year}{sp}{sp}</span>
                  {item.conditions}{sp}{sp}
                  </td>
                  <td className='temp-high'>
                    High: {item.high.fahrenheit}&deg;
                  </td>
                  <td className='temp-low'>
                    Low: {item.low.fahrenheit}&deg;
                  </td>
                  <td>
                    <img
                      className='icon'
                      src={item.icon_url}
                    />
                  </td>
              </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Forecast

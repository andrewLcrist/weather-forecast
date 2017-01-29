import React from 'react'
import PinnedWeather from '../containers/PinnedWeatherContainer'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <PinnedWeather id={0} />
      <PinnedWeather id={1} />
      <PinnedWeather id={2} />
      <PinnedWeather id={3} />
    </div>
  )
}

export default Dashboard

import React from 'react';
import { Link } from 'react-router';

const Header = ({ name, temp, desc }) => {
  let id = 'l'
  return(
    <div className="header-container">
    <article id='header'>
      <h1 className='title'>Weather Forecast</h1>
      <Link className="settings-link" to='/settings'> SETTINGS </Link>
    </article>
      <section className='current-forecast'>
      { name ?
      <p>Current forecast for {name}: {desc} at {Math.round(temp)}°F
      <Link to={`/forecast/${id}`} className='extended-local'> Extended Forecast </Link> </p>
      : null }
      </section>
    </div>
  )
}

export default Header

import React from 'react';
import { Link } from 'react-router';

const Header = ({ name, temp, desc }) => {
  let id = 'l'
  return(
    <div className="header-container">
    <article id='header'>
      <Link className='title' to=''>Weather Forecast</Link>
      <Link className="settings-link" to='/settings'> SETTINGS </Link>
    </article>
      <section className='current-forecast'>
      { name ?
      <p>Current forecast for {name}<br/><br/>{desc} at {Math.round(temp)}°F <br/><br/>
      <Link to={`/forecast/${id}`} className='extended-local'> Extended Forecast </Link></p>
      : null }
      </section>
    </div>
  )
}

export default Header

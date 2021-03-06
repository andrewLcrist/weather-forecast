import React from 'react';
import { Link } from 'react-router';

const SettingsForm = ({ names, handleSubmit, handleDelete }) => {
    let input;

    if (names) {
      names = names.map((pins, i) => <div className='cities' key={i}> {pins.data.current_observation.display_location.full} <button id='deletebtn' onClick={()=> handleDelete(i)}> DELETE </button></div>)
    } else { names = '' }

    return (
      <div className="settings-form">
        <Link className='home-link' to=''>Return to Dashboard</Link>
        <form
          id='input-container'
          onSubmit={ (e) => {
          e.preventDefault()
          handleSubmit(input.value)
        }}>
          <input
            autoFocus
            type='number'
            id='zip-input'
            placeholder='Enter a Zipcode'
            ref={ node => { input = node }} />
          <input
            disabled={names.length > 3}
            className='submitbtn'
            type='submit'
            value='Submit'
          />
        </form>
        {names}
      </div>
  )}

export default SettingsForm;

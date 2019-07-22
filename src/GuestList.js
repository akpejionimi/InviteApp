import React from 'react';
import propTypes from 'prop-types'
const GuestList = (props) =>
    <ul>
        {props.guests.map((guest, index) =>
            <li>
                <span>{guest.name}</span>
                <label>
                    <input type="checkbox" checked= {guest.isConfirmed}/> Confirmed
          </label>
                <button>edit</button>
                <button>remove</button>
            </li>
        )}
    </ul>

GuestList.propTypes = {
    guests: propTypes.array.isRequired
}

export default GuestList;
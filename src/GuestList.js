import React from 'react';
import propTypes from 'prop-types'

import Guest from "./Guest"
const GuestList = (props) =>
    <ul>
        {props.guests.map((guest, index) =>
            <Guest key={index}
                name={guest.name}
                isConfirmed={guest.isConfirmed}
                handleConfirmation={() => props.toggleComfirmationAt(index)}
                handleToggleEditing= {() => props.toggleEditingAt(index)}
                setName={text => props.setNameAt(text, index)}
            />
        )}
    </ul>

GuestList.propTypes = {
    guests: propTypes.array.isRequired,
    toggleComfirmationAt: propTypes.func.isRequired,
    handleToggleEditing: propTypes.func.isRequired,
    setNameAt: propTypes.func.isRequired
}

export default GuestList;
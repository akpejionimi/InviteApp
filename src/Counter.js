import React from 'react';
import PropTypes from "prop-types";

const Counter = (props) => 
 
    <table className="counter">
        <tbody>
            <tr>
                <td>Attending:</td>
                <td>{props.numAttending}</td>
            </tr>
            <tr>
                <td>Unconfirmed:</td>
                <td>{props.numUnconfirmed}</td>
            </tr>
            <tr>
                <td>Total:</td>
                <td>{props.totalNum}</td>
            </tr>
        </tbody>
    </table>
  
Counter.Prototype ={
    numAttending : PropTypes.number.isRequired,
    numUnconfirmed : PropTypes.number.isRequired,
    totalNum : PropTypes.number.isRequired,
}
export default Counter;
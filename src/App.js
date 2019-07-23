import React, { Component } from 'react';

import GuestList from './GuestList'
import Counter from './Counter'
import './App.css';

class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: "Jae",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "Marks",
        isConfirmed: true,
        isEditing: false
      },
      {
        name: "Zubby",
        isConfirmed: false,
        isEditing: false
      }
    ]
  }

  toggleGuestPropertyAt = (property, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })

    })

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt("isConfirmed", index);

  toggleEditingAt = index =>
    this.toggleGuestPropertyAt("isEditing", index)

  removeGuestAt = index =>
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    })

  setNameAt = (name, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })

    })

  toggleFiltered = () =>
    this.setState({
      isFiltered: !this.state.isFiltered
    })

  handleNameIput = (e) =>
    this.setState({
      pendingGuest: e.target.value
    })

  newGuestsubmitDetails = (e) => {
    e.preventDefault();
    this.setState({
      guests: [{
        name: this.state.pendingGuest,
        isConfirmed: false,
        isEditing: false
      },
      ...this.state.guests
      ],
      //clear input field
      pendingGuest: ""
    })

  }

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total, 0
    );

  render() {
    const totalNum = this.getTotalInvited();
    const numAttending = this.getAttendingGuests();
    const numUnconfirmed = this.getTotalInvited() - this.getAttendingGuests();
    return (
      <div className="AppMain">
        <header>
          <h1>RSVP</h1>
          <p>A basic invite App</p>
          <form onSubmit={this.newGuestsubmitDetails}>
            <input
              onChange={this.handleNameIput}
              type="text"
              value={this.state.pendingGuest} placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
                onChange={this.toggleFiltered}
                checked={this.state.isFiltered}
                type="checkbox" /> Hide those who haven't responded
          </label>
          </div>
          <Counter
            totalNum={totalNum}
            numAttending= {numAttending}
            numUnconfirmed= {numUnconfirmed}
          />
          <GuestList guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            removeGuestAt={this.removeGuestAt}
            pendingGuest={this.state.pendingGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;

import './App.css';
import React, { Component } from 'react'

class VeryEasy extends Component {
  render() {
    return (
    <div className="App">
      <h1>Very Easy</h1>
      <ul>

        {/* <li>Micah Norrington</li>
        <li>908-312-9363</li>
        <li>February 7, 2003</li>
        <li>Software Developer</li> */}

        <li>{this.props.name}</li>
        <li>{this.props.number}</li>
        <li>{this.props.birthday}</li>
        <li>{this.props.occupation}</li>
      </ul>
    </div>
    )
  }
}

export default VeryEasy

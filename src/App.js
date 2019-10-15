
import React, { Component } from 'react';
import './App.css';
import OriginGames from './origin/OriginGames.js'

class App extends Component {
  state = {}

  spinTheWheel = () =>
    this.setState({ refreshWheel: !this.state.refreshWheel })

  render() {
    return (
      <div>
        <OriginGames refresh={this.state.refreshWheel}></OriginGames>
        <button onClick={this.spinTheWheel}>Spin the Wheel!</button>
      </div >
    )
  }

}

export default App;
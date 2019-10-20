
import React, { Component } from 'react';
import OriginGames from './origin/OriginGames.js'
import './App.css'

class App extends Component {
  state = {}

  spinTheWheel = () =>
    this.setState({ refreshWheel: !this.state.refreshWheel })

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <br></br>
          <h1 className='home-page-title'>Origin Roulette</h1>
          <OriginGames refresh={this.state.refreshWheel}></OriginGames>
          <br></br>
          <div className='inputs'>
            <button className='wheel-button' onClick={this.spinTheWheel}>Spin the Wheel!</button>
            <select className='genre-dropdown'>
              <option value='action'>Action</option>
              <option value='adventure'>Adventure</option>
              <option value='arcade'>Arcade</option>
              <option value='casual'>Casual</option>
              <option value='family'>Family</option>
              <option value='first-person'>First-Person</option>
              <option value='horror'>Horror</option>
              <option value='indie'>Indie</option>
              <option value='mmo'>MMO</option>
              <option value='platformer'>Platformer</option>
              <option value='role-playing'>Role-Playing</option>
              <option value='sci-fi'>Sci-Fi</option>
              <option value='shooter'>Shooter</option>
              <option value='simulation'>Simulation</option>
              <option value='sports'>Sports</option>
              <option value='strategy'>Strategy</option>
              <option value='third-person'>Third Person</option>
            </select>
          </div>
          <br></br>
        </header>
      </div>
    )
  }

}

export default App;
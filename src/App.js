
import React, { Component } from 'react';
import Select from 'react-select';
import OriginGames from './origin/OriginGames.js'
import './App.css'

const gameGenres = [
  { value: 'any', label: 'Choose Your Genre' },
  { value: 'action', label: 'Action' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'arcade', label: 'Arcade' },
  { value: 'casual', label: 'Casual' },
  { value: 'family', label: 'Family' },
  { value: 'first-person', label: 'First Person' },
  { value: 'horror', label: 'Horror' },
  { value: 'indie', label: 'Indie' },
  { value: 'mmo', label: 'MMO' },
  { value: 'platformer', label: 'Platformer' },
  { value: 'role-playing', label: 'Role Playing' },
  { value: 'sci-fi', label: 'Sci-Fi' },
  { value: 'shooter', label: 'Shooter' },
  { value: 'simulation', label: 'Simulation' },
  { value: 'sports', label: 'Sports' },
  { value: 'strategy', label: 'Strategy' },
  { value: 'third-person', label: 'Third Person' },
]

class App extends Component {
  state = {
    selectedOption: { value: 'any', label: 'Choose Your Genre' },
    refreshWheel: null,
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption })
  }

  spinTheWheel = () => {
    this.setState({ refreshWheel: !this.state.refreshWheel })
  }

  render() {
    const { selectedOption } = this.state;
    return (
      <div className='App'>
        <header className='App-header'>
          <br></br>
          <h1 className='home-page-title'>Origin Roulette</h1>
          <OriginGames refresh={this.state}></OriginGames>
          <br></br>
          <div className='inputs'>
            <button className='wheel-button' onClick={this.spinTheWheel}>Spin the Wheel!</button>
            <br></br>
            <Select
              options={gameGenres}
              value={selectedOption}
              onChange={this.handleChange}
            />
          </div>
          <br></br>
        </header>
      </div>
    )
  }

}

export default App;
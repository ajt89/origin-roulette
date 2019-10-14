
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {this.state.games.map((game, i) => (
          <div className='origin-games' key={i}>
            <div className='game-body'>
              <h1 className='game-title'>{game.gameName}</h1>
              <a href={`https://www.origin.com/usa/en-us/store ${game.path}`}><img src={game.image} className='game-image' alt={`${game.gameName} cover art`}></img></a>
            </div>
          </div>
        ))}
      </div>
    )
  }

  state = {
    games: []
  };

  componentDidMount() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let searchTerm = '';
    let filterQuery = 'platform:pc-download,gameType:basegame';
    let facetField = 'subscriptionGroup,genre,gameType,availability,rating,players,language,platform,franchise,publisher,developer,price';
    let sort = '';
    let start = 0;
    let rows = 1;
    let isGDP = true
    let originUrl = `https://api1.origin.com/xsearch/store/en_us/usa/products?searchTerm=${searchTerm}&filterQuery=${filterQuery}&facetField=${facetField}&sort${sort}=&start=${start}&rows=${rows}&isGDP=${isGDP}`;
    fetch(proxyUrl + originUrl)
      .then(res => res.json())
      .then((data) => {
        let totalGames = data.games.numFound;
        start = Math.floor(Math.random() * totalGames);
        originUrl = `https://api1.origin.com/xsearch/store/en_us/usa/products?searchTerm=${searchTerm}&filterQuery=${filterQuery}&facetField=${facetField}&sort${sort}=&start=${start}&rows=${rows}&isGDP=${isGDP}`;
        fetch(proxyUrl + originUrl)
          .then(res => res.json())
          .then((data) => {
            this.setState({ games: data.games.game })
          })
      })
      .catch(console.log)
  }
}

export default App;
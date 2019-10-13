
import React, { Component } from 'react';
import Games from './components/games';

class App extends Component {
  render() {
    return (
      <Games games={this.state.games} />
    )
  }

  state = {
    games: []
  };

  componentDidMount() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let originUrl = 'https://api1.origin.com/xsearch/store/en_us/usa/products?searchTerm=&filterQuery=platform:pc-download,gameType:basegame&facetField=subscriptionGroup,genre,gameType,availability,rating,players,language,platform,franchise,publisher,developer,price&sort=&start=0&rows=1&isGDP=true';
    fetch(proxyUrl + originUrl)
      .then(res => res.json())
      .then((data) => {
        let totalGames = data.games.numFound;
        let start = Math.floor(Math.random() * totalGames);
        let originUrl = 'https://api1.origin.com/xsearch/store/en_us/usa/products?searchTerm=&filterQuery=platform:pc-download,gameType:basegame&facetField=subscriptionGroup,genre,gameType,availability,rating,players,language,platform,franchise,publisher,developer,price&sort=&start=' + start + '&rows=1&isGDP=true';
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
import React, { Component } from 'react';
import queryStore from './API.js';

class OriginGames extends Component {
    state = {
        games: [],
    };

    baseUrl = 'https://www.origin.com/usa/en-us/store'

    componentDidMount() {
        this.getRandomGame()
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.refresh !== prevState.refresh) {
            return { refresh: nextProps.refresh }
        }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.refresh !== this.props.refresh) {
            this.getRandomGame()
            this.setState({ refresh: 'refreshed' })
        }
    }

    getRandomGame() {
        let searchTerm = '';
        let filterQuery = 'platform:pc-download,gameType:basegame';
        let facetField = 'subscriptionGroup,genre,gameType,availability,rating,players,language,platform,franchise,publisher,developer,price';
        let sort = '';
        let start = 0;
        let rows = 1;
        let isGDP = true
        queryStore(searchTerm, filterQuery, facetField, sort, start, rows, isGDP)
            .then(res => res.json())
            .then((data) => {
                let totalGames = data.games.numFound;
                start = Math.floor(Math.random() * totalGames);
                queryStore(searchTerm, filterQuery, facetField, sort, start, rows, isGDP)
                    .then(res => res.json())
                    .then((data) => {
                        this.setState({ games: data.games.game });
                    })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                {this.state.games.map((game, i) => (
                    <div className='origin-games' key={i}>
                        <div className='game-body'>
                            <h1 className='game-title'>{game.gameName}</h1>
                            <a href={`https://www.origin.com/usa/en-us/store${game.path}`}><img src={game.image} className='game-image' alt={`${game.gameName} cover art`}></img></a>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default OriginGames

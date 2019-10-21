import React, { Component } from 'react';
import queryStore from './API.js';
import './OriginGames.css';

class OriginGames extends Component {
    state = {
        games: [],
    };

    baseUrl = 'https://www.origin.com/usa/en-us/store'

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.refresh !== prevState.refresh) {
            return { refresh: nextProps.refresh.refreshWheel }
        }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.refresh.refreshWheel !== this.props.refresh.refreshWheel) {
            this.getRandomGame();
            this.setState({ refresh: 'refreshed' })
        }
    }

    getRandomGame() {
        let genreQuery = '';
        if (this.props.refresh.selectedOption) {
            genreQuery = `,genre:${this.props.refresh.selectedOption.value}`;
        }
        let searchTerm = '';
        let filterQuery = `platform:pc-download,gameType:basegame${genreQuery}`;
        let facetField = 'subscriptionGroup,genre,gameType,availability,rating,players,language,platform,franchise,publisher,developer,price';
        let sort = '';
        let start = 0;
        let rows = 1;
        let isGDP = true
        console.log(filterQuery);
        queryStore(searchTerm, filterQuery, facetField, sort, start, rows, isGDP)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
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
            <div className='origin-games'>
                {this.state.games.map((game, i) => (
                    <div className='origin-game' key={i}>
                        <div className='game-body'>
                            <br></br>
                            <h2 className='game-title'>{game.gameName}</h2>
                            <a href={`https://www.origin.com/usa/en-us/store${game.path}`}><img className='game-cover' src={game.image} alt={`${game.gameName} cover art`}></img></a>
                            <br></br>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default OriginGames

import React from 'react'

const Games = ({ games }) => {
    return (
        <div>
            <center><h1>Origin Games</h1></center>
            {games.map((game) => (
                <div class="origin-games">
                    <div class="game-body">
                        <h5 class="game-title">{game.gameName}</h5>
                        <a><img src={game.image}></img></a>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Games

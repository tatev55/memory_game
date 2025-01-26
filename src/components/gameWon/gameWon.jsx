import "./gameWon.css"

const GameWon = ({onPlayAgain}) => {
    return (
        <div className = 'game-won'>
            <h2 className="game-won-text">Congratulations, you won!
                <i className ="fa-solid fa-trophy"></i>
            </h2>
            <button className="play-again-button" onClick={onPlayAgain}>Play Again</button>
        </div>
    )
}

export default GameWon
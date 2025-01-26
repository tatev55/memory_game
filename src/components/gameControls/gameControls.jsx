import "./gameControls.css"

const GameControls = ({select, onSelectChange, onStartGame}) => {
    return (
        <div className = "select-container" value = {select} onChange={onSelectChange}>
            <select className = 'select'>
                <option value = "6" className="option">6 Cards</option>
                <option value = "9" className="option">9 Cards</option>
                <option value = "12" className="option">12 Cards</option>
            </select>
            <button className = "button-startGame" onClick = {onStartGame}>Start Game</button>
        </div>
    )
}

export default GameControls;
import { Button } from "../button/button";
import { GameBoard } from "../game-board/game-board";
import { useState } from "react";
import "./game-controls.css"

const GameControls = () => {
    const [select, setSelect] = useState('6');
    const [gameStart, setGameStart] = useState(false)

    const handleSelectChange = (e) => {
        setSelect(Number(e.target.value));
    }

    const handleStartGame = () => {
        setGameStart(true);
    }

    const handleResetGame = () => {
        setGameStart(false);
    }
    
    return (
        <div className = "select-container">
            <h1>Memory Game</h1>
            {!gameStart ? ( <div className="inner">
                <select className = 'select' value = {select} onChange={handleSelectChange}>
                    <option value = "6" className="option">6 Cards</option>
                    <option value = "9" className="option">9 Cards</option>
                    <option value = "12" className="option">12 Cards</option>
                </select>
                <Button children = "Start Game "className = "button-startGame" onClick = {handleStartGame} ></Button>
            </div>):
            (<GameBoard level = {select} onResetGame = {handleResetGame}/>)}
            
        </div>
    )
}

export default GameControls;
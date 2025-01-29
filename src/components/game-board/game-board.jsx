import { useState } from "react";
import { faker } from "@faker-js/faker";
import Card from "../card/card"
import GameWon from "../game-won/game-won";
import { Button } from "../button/button";
import "./game-board.css"


const generateCards = (level) => {
    const words = Array.from({length: level}, () => faker.word.noun());
    return words.map((word, index) => ({
     id: faker.string.uuid(),
     word: word,
     revealed: false,
     guessed: false
    }))
 }

export const GameBoard =({level, onResetGame}) => {
    const [cards, setCards] = useState(generateCards(level));
    const [cardsRevealed, setCardsRevealed] = useState(true);


  const handleCardClick = (id, guessed) => {
  
    setCards((prevState) => prevState.map (card => 
        card.id === id ?{...card, revealed: true, guessed:guessed} : card)
    )
  }

  const handleHideCards = () => {
    setCardsRevealed(false)
  }

  const allCardOpened = cards.every((card) => card.revealed);
  const guessedCorrect = cards.filter((card) => card.guessed);




    
    return (
        <div className="game-board-container">
           {cardsRevealed? (
             <Button className = "hide" onClick = {handleHideCards}>Hide</Button>
           ):(
            <div className="description-game">
                Start guessing by clicking the cards
            </div>
           )}
            <div className="box-cards">
                {cards.map((card) => (
                    <Card key={card.id} 
                    card = {card} 
                    open = {cardsRevealed}
                    onClick = {handleCardClick}/>
                ))}
            </div>
            {allCardOpened  && (
                <GameWon 
                    account={`${guessedCorrect.length} / ${cards.length} Correct `}
                    icon = {cards.length === guessedCorrect.length? "fa-solid fa-trophy" : "fa-solid fa-face-sad-tear"}
                    onPlayAgain={onResetGame}
                />
            )}
    
        </div>
    )   
    
}





















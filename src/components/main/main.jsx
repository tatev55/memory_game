import { useState } from "react";
import { faker } from "@faker-js/faker";
import Card from "../card/card"
import GameControls from "../gameControls/gameControls";
import GameWon from "../gameWon/gameWon";
import "./main.css"

const Main = () => {
    const [select, setSelect] = useState('6');
    const [cards, setCards] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [cardsHidden, setCardsHidden] = useState(false); 
    

 
    

    const handleSelectChange = (e) => {
        setSelect(e.target.value);
    }

    const generateCards = (num) => {
        let cards = [];
        for(let i = 0; i <num; i++ ){
            cards.push({id: faker.string.uuid(), text : faker.word.noun(), visible: true})
        }
        setCards(cards);
        
        
    }

    const handleStartGame = (e) => {
        generateCards(parseInt(select))
        setIsOpen(true)
        
    }

    const handleHideCards = (e)=> {
        e.target.style.display = 'none'
        setCards(cards.map((card) => ({...card, visible :false})))
        setCardsHidden(true)
        document.querySelector('.description-text').style.display = 'block'
         
    }

    const handleCardClick = (cardId) => {

        if(!cardsHidden){
            return
        }
        const updatedCards = cards.map (card => 
            card.id === cardId ?{...card, visible: true } : card
        )
        setCards(updatedCards);
        if(updatedCards.every((card) => card.visible === true)){
            setGameWon(true)
        }
        
    }

    const handlePlayAgain = () => {
        setIsOpen(false);
        setGameWon(false);
        setCards([]);
        setCardsHidden(false);

    }



    
    return (
        <div className="main-container">
           {!isOpen  &&  !gameWon && (
                <GameControls
                    select={select}
                    onSelectChange={handleSelectChange}
                    onStartGame={handleStartGame}
                />
           )}

           {isOpen &&  <div className="cards-container">
                <button className="hide" onClick = {handleHideCards}>Hide</button>
                <p className = "description-text" >Start guessing by clicking the cards!</p>
                <div className="cards-box">
                    {cards.map((card) => (
                        <Card
                        key={card.id}
                        card={card}
                        onClick = {handleCardClick}
                        />    
                    ))}
                </div>
            </div>}
            {gameWon && (
                <GameWon 
                  onPlayAgain={handlePlayAgain}
                />
            )}
        </div>
    )
}

export default Main;



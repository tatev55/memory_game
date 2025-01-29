import { Button } from "../button/button";
import { useState } from "react";
import "./card.css"



const Card = ({card,open, onClick}) => {
    const [value, setValue] = useState("");

    const {id, revealed, word} = card;

    const handleCardChecked  = () => {
        const guessed = word.toLowerCase() === value.toLowerCase()
        onClick(id, guessed);
    }

    const handleInputChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="card">
           
            {revealed || open ? word: (
                 <div className = "input-box">
                    <input type="text" 
                        value={value}
                        onChange = {handleInputChange}
                        placeholder="Guess the word" 
                        className="input" />
                    <Button 
                        className="btn-check" 
                        onClick = {handleCardChecked}>
                        Check
                    </Button>
                </div>
            )}
            
        </div>
    )
}

export default Card;


















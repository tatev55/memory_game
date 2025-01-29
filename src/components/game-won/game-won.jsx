import { Button } from "../button/button";
import Modal from "../modal-component/modal";
import "./game-won.css"




const GameWon = ({ onPlayAgain, account, icon }) => {
    return (
        <Modal >
            <h2 className="game-won-text">
                Your Account: {account}
                <i className={icon}></i>
                
            </h2>
            <Button children="Play Again" className="play-again-button" onClick={onPlayAgain}></Button>
        </Modal>
    );
};



export default GameWon;






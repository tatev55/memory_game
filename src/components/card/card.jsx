import "./card.css"

const Card = ({card, onClick}) => {
    return (
        <div className="card" onClick = {() => onClick(card.id)}>
             <p className="card-text">{card.visible ? card.text: "?"}</p>
        </div>
    )
}

export default Card; 
import './GameCard.css';

export default function GameCard({game})
{
    return (
        <div className = "card hover-card">

            <div className = "image-box">
            <img src = {game.image} alt = {game.title} className = "I1"/>
            <img src = {game.hoverImage} alt = "hover" className = "I2"/>
            </div>  

            <h3>{game.title}</h3>
            <p>{game.description}</p>
            <p>Rating: ⭐ {game.rating} </p>

        </div>
    );
}
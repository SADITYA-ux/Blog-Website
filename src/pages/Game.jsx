import GameCard from "../components/GameCard";
import games from "../data/games";

export default function Games() 
{
    return (
        <div className = "container">
            <h1 className= "games-title">Games:</h1>
            <div className = "grid">
                {games.map((game)=> (
                    <GameCard key = {game.id} game = {game} />
                ))}
            </div>
        </div>
    )
}
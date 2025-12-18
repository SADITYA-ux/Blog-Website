export default function GameCard({video})
{
    return (
    <div className = "card">
        <img src = {video.thumbnail}    alt = {video.title} />
        <h3>{video.title}</h3>
    </div>
    );
}
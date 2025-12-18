import VideoCard from "../components/VideoCard";
import videos from "../data/vlogs";

export default function Blog()
{
    return (
        <div className = "container">
            <h1>Vlogs</h1>
            <div className = "grid">
                {videos.map((video)=> (
                    <VideoCard key = {video.id} video = {video} />
                ))}
            </div>
        </div>
    )
}
import React, {useState} from 'react';
import './GameCard.css';

export default function GameCard({game}) {
    const [open, setOpen] = useState(false);
   
    return(
        <>
            {/* Game Card - Clickable */}
            <div className="hover-card" onClick={() => setOpen(true)}>
                
                {/* Image container with hover effect */}
                <div className="image-box">
                    <img 
                        src={game.image} 
                        alt={game.title} 
                        className="I1"
                    />
                    <img 
                        src={game.hoverImage} 
                        alt={`${game.title} gameplay`} 
                        className="I2"
                    />
                    <h3 className="game-title">{game.title}</h3>
                </div>  

                {/* Card content */}
                <p className="desc">{game.description}</p>
                <p>Rating: ⭐ {game.rating}</p>
                
                {/* Quick info preview */}
                <div className="quick-info">
                    <span className="info-tag">{game.genre}</span>
                    <span className="info-tag">{game.releaseYear}</span>
                </div>
            </div>

            {/* Modal/Popup */}
            {open && (
                <div className="modal-overlay" onClick={() => setOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        
                        {/* Close button */}
                        <button className="modal-close" onClick={() => setOpen(false)}>
                            ×
                        </button>
                        
                        {/* Modal header with game image */}
                        <div className="modal-header">
                            <div className="modal-image-container">
                                <img 
                                    src={game.image} 
                                    alt={game.title}
                                    className="modal-main-image"
                                />
                            </div>
                            <div className="modal-title-section">
                                <h2>{game.title}</h2>
                                <div className="modal-rating">
                                    <span className="stars">{"⭐".repeat(Math.floor(game.rating))}</span>
                                    <span className="rating-value">{game.rating}/10</span>
                                </div>
                            </div>
                        </div>

                        {/* Modal body with game details */}
                        <div className="modal-body">
                            <div className="game-details">
                                <div className="detail-row">
                                    <span className="detail-label">Genre:</span>
                                    <span className="detail-value">{game.genre}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Release Year:</span>
                                    <span className="detail-value">{game.releaseYear}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Developer:</span>
                                    <span className="detail-value">{game.developer}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Rating:</span>
                                    <span className="detail-value">{game.rating}/10</span>
                                </div>
                            </div>

                            {/* Game description */}
                            <div className="modal-description">
                                <h4>About the Game</h4>
                                <p>{game.description}</p>
                            </div>

                            {/* If you have additional images in the future */}
                            {game.screenshots && game.screenshots.length > 0 && (
                                <div className="game-screenshots">
                                    <h4>Screenshots</h4>
                                    <div className="screenshot-grid">
                                        {game.screenshots.map((screenshot, index) => (
                                            <img 
                                                key={index}
                                                src={screenshot} 
                                                alt={`${game.title} screenshot ${index + 1}`}
                                                className="screenshot"
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button 
                                className="close-btn"
                                onClick={() => setOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
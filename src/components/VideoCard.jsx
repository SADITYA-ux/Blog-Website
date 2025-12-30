import React, {useState} from 'react';
import './VideoCard.css';

export default function VideoCard({video})
{
    const [open, setOpen] = useState(false);

    
    return (
    <>
        <div className="hover-card" onClick={() => setOpen(true)}>
                
                <div className="image-box">
                    <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="I1"
                    />
                    <h3 className="video-title">{video.title}</h3>
                </div>  

                <p className="desc">{video.description}</p>
                
                <div className="quick-info">
                    <span className="info-tag">{video.genre}</span>
                    <span className="info-tag">{video.releaseYear}</span>
                </div>
        </div>
        
        {open && (
            <div className="modal-overlay" onClick={() => setOpen(false)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={() => setOpen(false)}>×</button>

                    <div className="modal-header">
                        <div className="modal-image-container">
                            <img 
                                src={video.thumbnail} 
                                alt={video.title}
                                className="modal-main-image"
                            />
                            <div className="modal-title-section">
                                <h2 className="modal-title">{video.title}</h2>  
                            </div>
                        </div>
                    </div>

                      <div className="modal-body">
                            <div className="video-details">
                                <div className="detail-row">
                                    <span className="detail-label">Genre:</span>
                                    <span className="detail-value">{video.genre}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Release Year:</span>
                                    <span className="detail-value">{video.releaseYear}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Developer:</span>
                                    <span className="detail-value">{video.Developer}</span>
                                </div>
                            </div>

                            <div className="modal-description">
                                <h4>About the Game</h4>
                                <p>{video.description}</p>
                            </div>

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
            </div>
        )}

    </>
    );
}
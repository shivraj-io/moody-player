import React, { useState } from 'react';
import FacialExpression from './FaceExpressionDetector';
import MoodSongs from './MoodSongs';
import './Home.css';

const Home = () => {
  const [songs, setSongs] = useState([]);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Music That Reads Your <span className="gradient-text">Mood</span>
          </h1>
          <p className="hero-description">
            Experience the magic of AI-powered music curation. Our advanced facial recognition 
            technology analyzes your emotions and curates the perfect playlist just for you.
          </p>
          <div className="hero-features">
            <div className="feature-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
              <span>AI-Powered</span>
            </div>
            <div className="feature-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M9 9H9.01M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Emotion Detection</span>
            </div>
            <div className="feature-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18V5L21 12L9 19V18ZM9 18L3 21V3L9 6V18Z" fill="currentColor"/>
              </svg>
              <span>Personalized Playlists</span>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Layout: Camera on Left, Songs on Right */}
      <section className="main-content-section">
        <div className="two-column-layout">
          {/* Left Side - Camera & Mood Detection */}
          <div className="left-column">
            <div className="section-header">
              <h2>Detect Your Mood</h2>
              <p>Let our AI analyze your facial expression</p>
            </div>
            <FacialExpression setSongs={setSongs} />
          </div>

          {/* Right Side - Recommended Songs */}
          <div className="right-column">
            <div className="section-header">
              <h2>Recommended Songs</h2>
              <p>Your personalized playlist based on mood</p>
            </div>
            {songs.length > 0 ? (
              <div className="songs-list-container">
                <MoodSongs Songs={songs} />
              </div>
            ) : (
              <div className="empty-songs-state">
                <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="4" opacity="0.3"/>
                  <path d="M45 55C45 55 50 60 60 60C70 60 75 55 75 55M50 45H50.01M70 45H70.01" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
                <h3>No Songs Yet</h3>
                <p>Detect your mood to see recommendations here</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">🎵</div>
            <h3>Vast Music Library</h3>
            <p>Access thousands of songs across all genres and moods</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🤖</div>
            <h3>Smart AI Algorithm</h3>
            <p>Advanced facial recognition and emotion analysis technology</p>
          </div>
          <div className="info-card">
            <div className="info-icon">⚡</div>
            <h3>Instant Results</h3>
            <p>Get your personalized playlist in seconds, no waiting</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

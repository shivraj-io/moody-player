import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Moody Player</h1>
          <p className="about-tagline">
            Where Emotions Meet Music
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <div className="about-section">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Moody Player was born from a simple idea: music should adapt to how you feel. 
                We believe that the right song at the right moment can transform your mood, 
                boost your energy, or provide comfort when you need it most.
              </p>
              <p>
                Using cutting-edge AI and facial recognition technology, we've created a 
                platform that understands your emotions and curates the perfect soundtrack 
                for your life. No more scrolling through endless playlists – just pure, 
                emotion-driven musical discovery.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" fill="url(#gradient1)"/>
                  <path d="M70 90C70 90 80 100 100 100C120 100 130 90 130 90M85 75H85.01M115 75H115.01" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient1" x1="0" y1="0" x2="200" y2="200">
                      <stop offset="0%" stopColor="#667eea"/>
                      <stop offset="100%" stopColor="#764ba2"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className="about-mission">
            <h2>Our Mission</h2>
            <p>
              To revolutionize how people discover and experience music by creating a deeply 
              personal connection between emotions and sound. We're committed to making every 
              listening experience meaningful and perfectly tailored to your mood.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎭</div>
              <h3>Emotion Recognition</h3>
              <p>
                Our advanced AI analyzes facial expressions to detect happiness, sadness, 
                anger, surprise, and more with incredible accuracy.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎶</div>
              <h3>Smart Curation</h3>
              <p>
                Intelligent algorithms match your emotions with the perfect songs from our 
                extensive music library spanning all genres.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <h3>Privacy First</h3>
              <p>
                Your facial data is processed locally and never stored. We respect your 
                privacy while delivering personalized experiences.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <h3>Real-Time Processing</h3>
              <p>
                Instant mood detection and song recommendations in seconds. No waiting, 
                just seamless musical discovery.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <h3>Global Music Library</h3>
              <p>
                Access songs from around the world across countless genres, languages, 
                and musical traditions.
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💡</div>
              <h3>Continuous Learning</h3>
              <p>
                Our AI constantly improves, learning from patterns to provide even better 
                recommendations over time.
              </p>
            </div>
          </div>

          <div className="about-tech">
            <h2>Technology Behind Moody Player</h2>
            <div className="tech-grid">
              <div className="tech-card">
                <h4>Face-API.js</h4>
                <p>Advanced facial recognition and expression detection</p>
              </div>
              <div className="tech-card">
                <h4>Machine Learning</h4>
                <p>Neural networks trained on thousands of emotional expressions</p>
              </div>
              <div className="tech-card">
                <h4>React & Node.js</h4>
                <p>Modern web technologies for smooth performance</p>
              </div>
              <div className="tech-card">
                <h4>Cloud Integration</h4>
                <p>Scalable infrastructure for millions of songs</p>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <h2>Ready to Experience Music Like Never Before?</h2>
            <p>Let your emotions guide your playlist</p>
            <a href="/" className="cta-button">
              Try Moody Player Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

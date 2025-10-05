import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/src/assets/logo.png" alt="Moody Player" />
              <h3>Moody Player</h3>
            </div>
            <p className="footer-description">
              Where emotions meet music. Discover songs that match your mood with AI-powered technology.
            </p>
            <div className="footer-social">
              <a href="https://x.com/shivraj_io" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/shivraj.banna28" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/shivraj._.banna_" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" stroke="white" strokeWidth="2"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Features</h4>
            <ul>
              <li><a href="#">Mood Detection</a></li>
              <li><a href="#">AI Recommendations</a></li>
              <li><a href="#">Music Library</a></li>
              <li><a href="#">Playlist Creator</a></li>
              <li><a href="#">Mobile App</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p className="newsletter-text">Subscribe to get updates on new features and music trends</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button type="submit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Moody Player. All rights reserved.</p>
          <p>Made with ❤️ for music lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

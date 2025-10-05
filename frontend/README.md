# 🎵 Moody Player - AI-Powered Music Recommendation

<div align="center">
  <img src="./src/assets/logo.png" alt="Moody Player Logo" width="120" height="120">
  
  <p><strong>Where Emotions Meet Music</strong></p>
  
  <p>Experience the magic of AI-powered music curation. Our advanced facial recognition technology analyzes your emotions and curates the perfect playlist just for you.</p>
</div>

---

## ✨ Features

- 🤖 **AI-Powered Mood Detection** - Advanced facial recognition using Face-API.js
- 🎵 **Smart Music Recommendations** - Personalized playlists based on your emotions
- 🎨 **Beautiful UI/UX** - Clean, modern, and responsive design
- 📱 **Multi-Page Application** - Home, About, and Contact pages
- 🎸 **Integrated Music Player** - Shows song name, artist name, and album art
- ⚡ **Real-Time Processing** - Instant mood detection and recommendations
- 🔒 **Privacy First** - All facial data processed locally, never stored

## 🚀 Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.4
- **Routing**: React Router DOM 7.x
- **AI/ML**: Face-API.js 0.22.2
- **HTTP Client**: Axios 1.10.0
- **Styling**: CSS3 with custom components

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd "moody player/frontend"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
frontend/
├── public/
│   ├── models/               # Face-API.js ML models
│   └── music-1-svgrepo-com.svg
├── src/
│   ├── assets/              # Images and static files
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Home.jsx         # Home page
│   │   ├── About.jsx        # About page
│   │   ├── Contact.jsx      # Contact page
│   │   ├── Footer.jsx       # Footer component
│   │   ├── FaceExpressionDetector.jsx
│   │   ├── MoodSongs.jsx    # Song list with player
│   │   └── MusicPlayerBar.jsx
│   ├── App.jsx              # Main app with routing
│   ├── App.css              # Global styles
│   ├── main.jsx             # Entry point
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Usage

1. **Home Page**
   - Allow camera access for mood detection
   - Click "Detect Mood" to analyze your facial expression
   - Get personalized song recommendations
   - Play songs directly from the interface

2. **About Page**
   - Learn about Moody Player's mission
   - Discover the technology behind the app
   - Explore features and capabilities

3. **Contact Page**
   - Fill out the contact form
   - Get in touch via email, phone, or social media
   - Subscribe to the newsletter

## 🎨 Pages Overview

### Home Page
- Hero section with gradient background
- Feature badges (AI-Powered, Emotion Detection, Personalized Playlists)
- Mood detection section with camera integration
- Personalized playlist display
- Info cards highlighting key features

### About Page
- Company story and mission
- Feature grid with detailed explanations
- Technology stack showcase
- Call-to-action section

### Contact Page
- Contact information cards (Email, Phone, Address)
- Interactive contact form
- Social media links
- Newsletter subscription

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

**Note**: Camera access required for mood detection feature.

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- 💻 Desktop (1400px+)
- 📱 Tablet (768px - 1024px)
- 📱 Mobile (320px - 767px)

## 🎭 Mood Detection

The app uses Face-API.js to detect the following emotions:
- 😊 Happy
- 😢 Sad
- 😠 Angry
- 😮 Surprised
- 😐 Neutral
- 😨 Fearful
- 🤢 Disgusted

## 🔐 Privacy & Security

- Facial data is processed entirely in the browser
- No facial images or data are sent to servers
- No data is stored permanently
- Camera access can be revoked at any time

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Created with ❤️ for music lovers

---

<div align="center">
  <p><strong>Made with React + Vite + Face-API.js</strong></p>
  <p>⭐ Star this repo if you like it!</p>
</div>


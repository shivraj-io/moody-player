import React, { useRef, useState, useEffect } from 'react';
import './MusicPlayerBar.css';

const formatTime = (s) => {
  if (!s || isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
};

const MusicPlayerBar = ({ song }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnd = () => setPlaying(false);

    audio.addEventListener('ended', onEnd);

    return () => {
      audio.removeEventListener('ended', onEnd);
    };
  }, [song]);

  useEffect(() => {
    // when song changes, reset play state
    setPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [song]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  // time controls removed

  return (
    <div className="music-player-bar">
      <div className="music-player-bar-inner">
        <img
          alt="Album Art"
          className="album-art"
          src={song?.cover || "https://lh3.googleusercontent.com/aida-public/AB6AXuCp2ai2xlFMiBpVs5tWCo09ddBUVgIbgAfaBm3lcNJ9i08DIx3NYf-hAKCByw2UHB9kuDABDtE18ShBTEwDKXRvcy6l2qxGKX1LhCBZHlLywjy6xcm4O3OlRBNhBfR8M_r37MAIgZHxLlV9ymSx5F6_8G6GHGnoaSg9HGj50YGGMftM_vSyfXnBYwfrtEiX0PGhPUxvs5oH187lIWWTap0vESAdyGXwG6f0_qM3R9GWP0JwUAoWg9GUj40DE8ZYUcyf0silVU35EY4"}
        />
        <div className="song-info">
          <div className="song-title">{song?.title || "Midnight Serenade"}</div>
          <div className="song-artist">{song?.artist || "Luna Beats"}</div>
        </div>

  <div className="controls">
          <button onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
            {playing ? (
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7" y="6" width="5" height="20" rx="2" fill="currentColor"/>
                <rect x="20" y="6" width="5" height="20" rx="2" fill="currentColor"/>
              </svg>
            ) : (
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6V26L26 16L8 6Z" fill="currentColor"/>
              </svg>
            )}
          </button>
        </div>

  {/* time/progress removed */}

        <audio ref={audioRef} src={song?.audio} />
      </div>
    </div>
  );
};

export default MusicPlayerBar;

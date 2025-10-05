import { ComputeAllFaceDescriptorsTask } from 'face-api.js'
import './MusicPlayerBar.css';
import { useState, useRef } from 'react'

// Mood-based SVG icons with stunning designs
const MoodIcon = ({ mood }) => {
    const getMoodIcon = () => {
        switch(mood?.toLowerCase()) {
            case 'happy':
                return (
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="happyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FFD93D"/>
                                <stop offset="50%" stopColor="#FFA500"/>
                                <stop offset="100%" stopColor="#FF6B35"/>
                            </linearGradient>
                            <filter id="happyGlow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <circle cx="50" cy="50" r="45" fill="url(#happyGradient)" filter="url(#happyGlow)"/>
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.5"/>
                        
                        {/* Sparkles */}
                        <circle cx="20" cy="20" r="2" fill="#FFF" opacity="0.8">
                            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="80" cy="25" r="2.5" fill="#FFF" opacity="0.8">
                            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite"/>
                        </circle>
                        
                        {/* Eyes */}
                        <ellipse cx="35" cy="40" rx="4" ry="6" fill="#2D1B00"/>
                        <ellipse cx="65" cy="40" rx="4" ry="6" fill="#2D1B00"/>
                        <circle cx="36" cy="38" r="2" fill="#FFF"/>
                        <circle cx="66" cy="38" r="2" fill="#FFF"/>
                        
                        {/* Big smile */}
                        <path d="M30 55 Q50 75 70 55" stroke="#2D1B00" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
                        <path d="M32 55 Q50 72 68 55" stroke="#FFD700" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6"/>
                        
                        {/* Blush */}
                        <ellipse cx="25" cy="50" rx="6" ry="4" fill="#FF6B6B" opacity="0.3"/>
                        <ellipse cx="75" cy="50" rx="6" ry="4" fill="#FF6B6B" opacity="0.3"/>
                    </svg>
                );
            case 'sad':
                return (
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="sadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#6DD5FA"/>
                                <stop offset="50%" stopColor="#5B8DBE"/>
                                <stop offset="100%" stopColor="#2980B9"/>
                            </linearGradient>
                            <filter id="sadGlow">
                                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <circle cx="50" cy="50" r="45" fill="url(#sadGradient)" filter="url(#sadGlow)"/>
                        
                        {/* Rain drops */}
                        <path d="M30 15 L30 25" stroke="#5DADE2" strokeWidth="2" strokeLinecap="round" opacity="0.6">
                            <animate attributeName="y" values="0;10;0" dur="1.5s" repeatCount="indefinite"/>
                        </path>
                        <path d="M70 20 L70 30" stroke="#5DADE2" strokeWidth="2" strokeLinecap="round" opacity="0.6">
                            <animate attributeName="y" values="0;10;0" dur="1.8s" repeatCount="indefinite"/>
                        </path>
                        
                        {/* Sad eyes */}
                        <ellipse cx="35" cy="42" rx="4" ry="5" fill="#1A4D6F"/>
                        <ellipse cx="65" cy="42" rx="4" ry="5" fill="#1A4D6F"/>
                        
                        {/* Tears */}
                        <ellipse cx="35" cy="52" rx="2.5" ry="4" fill="#AED6F1">
                            <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
                        </ellipse>
                        <ellipse cx="65" cy="52" rx="2.5" ry="4" fill="#AED6F1">
                            <animate attributeName="opacity" values="1;0.5;1" dur="1.7s" repeatCount="indefinite"/>
                        </ellipse>
                        
                        {/* Sad mouth */}
                        <path d="M32 68 Q50 60 68 68" stroke="#1A4D6F" strokeWidth="3" fill="none" strokeLinecap="round"/>
                        
                        {/* Eyebrows */}
                        <path d="M28 32 Q35 30 42 32" stroke="#1A4D6F" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                        <path d="M58 32 Q65 30 72 32" stroke="#1A4D6F" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                    </svg>
                );
            case 'angry':
                return (
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="angryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FF416C"/>
                                <stop offset="50%" stopColor="#E63946"/>
                                <stop offset="100%" stopColor="#C1121F"/>
                            </linearGradient>
                            <filter id="angryGlow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <circle cx="50" cy="50" r="45" fill="url(#angryGradient)" filter="url(#angryGlow)">
                            <animate attributeName="r" values="45;46;45" dur="1s" repeatCount="indefinite"/>
                        </circle>
                        
                        {/* Steam lines */}
                        <path d="M20 15 Q20 10 20 5" stroke="#FF8787" strokeWidth="2.5" strokeLinecap="round" opacity="0.7">
                            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.2s" repeatCount="indefinite"/>
                        </path>
                        <path d="M80 15 Q80 10 80 5" stroke="#FF8787" strokeWidth="2.5" strokeLinecap="round" opacity="0.7">
                            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1s" repeatCount="indefinite"/>
                        </path>
                        
                        {/* Angry eyebrows */}
                        <path d="M25 30 L40 35" stroke="#8B0000" strokeWidth="4" strokeLinecap="round"/>
                        <path d="M75 30 L60 35" stroke="#8B0000" strokeWidth="4" strokeLinecap="round"/>
                        
                        {/* Fierce eyes */}
                        <ellipse cx="35" cy="43" rx="5" ry="6" fill="#8B0000"/>
                        <ellipse cx="65" cy="43" rx="5" ry="6" fill="#8B0000"/>
                        <circle cx="36" cy="41" r="2" fill="#FF6B6B"/>
                        <circle cx="66" cy="41" r="2" fill="#FF6B6B"/>
                        
                        {/* Angry mouth */}
                        <path d="M30 65 Q50 60 70 65" stroke="#8B0000" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
                        <rect x="30" y="62" width="10" height="3" fill="#FFF" opacity="0.8" rx="1"/>
                        <rect x="60" y="62" width="10" height="3" fill="#FFF" opacity="0.8" rx="1"/>
                    </svg>
                );
            case 'surprised':
                return (
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="surprisedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FF9FF3"/>
                                <stop offset="50%" stopColor="#FF6BCB"/>
                                <stop offset="100%" stopColor="#FF1493"/>
                            </linearGradient>
                            <filter id="surpriseGlow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <circle cx="50" cy="50" r="45" fill="url(#surprisedGradient)" filter="url(#surpriseGlow)"/>
                        
                        {/* Shock waves */}
                        <circle cx="50" cy="50" r="50" fill="none" stroke="#FF69B4" strokeWidth="2" opacity="0.4">
                            <animate attributeName="r" values="45;55;45" dur="1.5s" repeatCount="indefinite"/>
                            <animate attributeName="opacity" values="0.4;0;0.4" dur="1.5s" repeatCount="indefinite"/>
                        </circle>
                        
                        {/* Wide eyes */}
                        <circle cx="35" cy="38" r="8" fill="#FFF"/>
                        <circle cx="65" cy="38" r="8" fill="#FFF"/>
                        <circle cx="35" cy="38" r="5" fill="#2D1B4D"/>
                        <circle cx="65" cy="38" r="5" fill="#2D1B4D"/>
                        <circle cx="37" cy="36" r="2" fill="#FFF"/>
                        <circle cx="67" cy="36" r="2" fill="#FFF"/>
                        
                        {/* Raised eyebrows */}
                        <path d="M26 26 Q35 23 44 26" stroke="#2D1B4D" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                        <path d="M56 26 Q65 23 74 26" stroke="#2D1B4D" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                        
                        {/* O mouth */}
                        <ellipse cx="50" cy="62" rx="8" ry="12" fill="#2D1B4D"/>
                        <ellipse cx="50" cy="62" rx="6" ry="10" fill="#FF1493" opacity="0.3"/>
                        
                        {/* Exclamation marks */}
                        <text x="15" y="25" fill="#FFF" fontSize="16" fontWeight="bold" opacity="0.8">!</text>
                        <text x="82" y="25" fill="#FFF" fontSize="16" fontWeight="bold" opacity="0.8">!</text>
                    </svg>
                );
            case 'neutral':
                return (
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="neutralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#E0E0E0"/>
                                <stop offset="50%" stopColor="#BDBDBD"/>
                                <stop offset="100%" stopColor="#9E9E9E"/>
                            </linearGradient>
                            <filter id="neutralGlow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <circle cx="50" cy="50" r="45" fill="url(#neutralGradient)" filter="url(#neutralGlow)"/>
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#757575" strokeWidth="2" opacity="0.3"/>
                        
                        {/* Simple eyes */}
                        <circle cx="35" cy="40" r="4" fill="#424242"/>
                        <circle cx="65" cy="40" r="4" fill="#424242"/>
                        <circle cx="36" cy="38" r="1.5" fill="#FFF" opacity="0.6"/>
                        <circle cx="66" cy="38" r="1.5" fill="#FFF" opacity="0.6"/>
                        
                        {/* Straight line mouth */}
                        <line x1="35" y1="60" x2="65" y2="60" stroke="#424242" strokeWidth="3" strokeLinecap="round"/>
                        
                        {/* Subtle patterns */}
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#FFF" strokeWidth="1" opacity="0.1" strokeDasharray="3,3"/>
                    </svg>
                );
            case 'fearful':
                return (
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="fearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#B794F6"/>
                                <stop offset="50%" stopColor="#9370DB"/>
                                <stop offset="100%" stopColor="#7B68EE"/>
                            </linearGradient>
                            <filter id="fearGlow">
                                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <circle cx="50" cy="50" r="45" fill="url(#fearGradient)" filter="url(#fearGlow)">
                            <animate attributeName="r" values="45;44;45" dur="0.5s" repeatCount="indefinite"/>
                        </circle>
                        
                        {/* Sweat drops */}
                        <ellipse cx="20" cy="35" rx="3" ry="5" fill="#E6E6FA">
                            <animate attributeName="cy" values="35;42;35" dur="1.5s" repeatCount="indefinite"/>
                            <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
                        </ellipse>
                        <ellipse cx="80" cy="38" rx="3" ry="5" fill="#E6E6FA">
                            <animate attributeName="cy" values="38;45;38" dur="1.3s" repeatCount="indefinite"/>
                            <animate attributeName="opacity" values="1;0.3;1" dur="1.3s" repeatCount="indefinite"/>
                        </ellipse>
                        
                        {/* Worried eyes */}
                        <ellipse cx="35" cy="40" rx="6" ry="8" fill="#4B0082"/>
                        <ellipse cx="65" cy="40" rx="6" ry="8" fill="#4B0082"/>
                        <circle cx="36" cy="38" r="2" fill="#FFF" opacity="0.7"/>
                        <circle cx="66" cy="38" r="2" fill="#FFF" opacity="0.7"/>
                        
                        {/* Worried eyebrows */}
                        <path d="M26 28 Q35 26 44 30" stroke="#4B0082" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                        <path d="M74 28 Q65 26 56 30" stroke="#4B0082" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                        
                        {/* Worried mouth */}
                        <path d="M35 62 Q40 65 45 62 Q50 65 55 62 Q60 65 65 62" stroke="#4B0082" strokeWidth="3" fill="none" strokeLinecap="round"/>
                        
                        {/* Shaking effect lines */}
                        <path d="M15 50 L10 50" stroke="#B794F6" strokeWidth="2" opacity="0.4" strokeLinecap="round">
                            <animate attributeName="opacity" values="0.4;0;0.4" dur="0.3s" repeatCount="indefinite"/>
                        </path>
                        <path d="M85 50 L90 50" stroke="#B794F6" strokeWidth="2" opacity="0.4" strokeLinecap="round">
                            <animate attributeName="opacity" values="0.4;0;0.4" dur="0.3s" repeatCount="indefinite"/>
                        </path>
                    </svg>
                );
            case 'disgusted':
                return (
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="disgustGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#90EE90"/>
                                <stop offset="50%" stopColor="#7CB342"/>
                                <stop offset="100%" stopColor="#558B2F"/>
                            </linearGradient>
                            <filter id="disgustGlow">
                                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <circle cx="50" cy="50" r="45" fill="url(#disgustGradient)" filter="url(#disgustGlow)"/>
                        
                        {/* Stink lines */}
                        <path d="M30 12 Q28 8 30 4" stroke="#A5D6A7" strokeWidth="2.5" strokeLinecap="round" opacity="0.6">
                            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite"/>
                        </path>
                        <path d="M50 8 Q48 4 50 0" stroke="#A5D6A7" strokeWidth="2.5" strokeLinecap="round" opacity="0.6">
                            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.3s" repeatCount="indefinite"/>
                        </path>
                        <path d="M70 12 Q72 8 70 4" stroke="#A5D6A7" strokeWidth="2.5" strokeLinecap="round" opacity="0.6">
                            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.7s" repeatCount="indefinite"/>
                        </path>
                        
                        {/* Squinted eyes */}
                        <path d="M28 38 Q35 36 42 38" stroke="#2E4A1F" strokeWidth="3" fill="none" strokeLinecap="round"/>
                        <path d="M58 38 Q65 36 72 38" stroke="#2E4A1F" strokeWidth="3" fill="none" strokeLinecap="round"/>
                        
                        {/* Scrunched eyebrows */}
                        <path d="M26 30 L42 32" stroke="#2E4A1F" strokeWidth="2.5" strokeLinecap="round"/>
                        <path d="M74 30 L58 32" stroke="#2E4A1F" strokeWidth="2.5" strokeLinecap="round"/>
                        
                        {/* Disgusted mouth */}
                        <path d="M32 60 L38 55 L44 60 L50 55 L56 60 L62 55 L68 60" stroke="#2E4A1F" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        
                        {/* Tongue out slightly */}
                        <ellipse cx="50" cy="68" rx="6" ry="3" fill="#FF6B9D" opacity="0.7"/>
                        
                        {/* X marks */}
                        <path d="M20 45 L24 49 M24 45 L20 49" stroke="#558B2F" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                        <path d="M76 45 L80 49 M80 45 L76 49" stroke="#558B2F" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                    </svg>
                );
            default:
                return (
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="defaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#667eea"/>
                                <stop offset="50%" stopColor="#764ba2"/>
                                <stop offset="100%" stopColor="#f093fb"/>
                            </linearGradient>
                            <filter id="defaultGlow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <circle cx="50" cy="50" r="45" fill="url(#defaultGradient)" filter="url(#defaultGlow)"/>
                        <path d="M35 40 Q40 50 35 60" stroke="white" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
                        <path d="M65 40 Q60 50 65 60" stroke="white" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
                        <circle cx="50" cy="50" r="35" fill="none" stroke="#FFF" strokeWidth="2" opacity="0.2" strokeDasharray="5,5">
                            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="8s" repeatCount="indefinite"/>
                        </circle>
                    </svg>
                );
        }
    };

    return <div className="mood-icon-wrapper">{getMoodIcon()}</div>;
};


const MoodSongs = ({Songs}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentGroupKey, setCurrentGroupKey] = useState(null);
    const [currentTime, setCurrentTime] = useState({});
    const [duration, setDuration] = useState({});
    const [isDragging, setIsDragging] = useState(false);
    const [dragIndex, setDragIndex] = useState(null);
    const audioRefs = useRef([]);

    // group songs by title so we render a single player per distinct title
    const groups = Object.values(Songs.reduce((acc, s) => {
        const key = s.title || 'Unknown';
        if (!acc[key]) acc[key] = { key, title: key, songs: [] };
        acc[key].songs.push(s);
        return acc;
    }, {}));

    const formatTime = (seconds) => {
        if (!seconds || isNaN(seconds)) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleTimeUpdate = (idx) => {
        const audio = audioRefs.current[idx];
        if (audio && !isDragging) {
            setCurrentTime(prev => ({ ...prev, [idx]: audio.currentTime }));
        }
    };

    const handleLoadedMetadata = (idx) => {
        const audio = audioRefs.current[idx];
        if (audio) {
            setDuration(prev => ({ ...prev, [idx]: audio.duration }));
        }
    };

    const updateSeekPosition = (idx, clientX, rect) => {
        const audio = audioRefs.current[idx];
        if (audio && audio.duration) {
            const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            const newTime = percent * audio.duration;
            audio.currentTime = newTime;
            setCurrentTime(prev => ({ ...prev, [idx]: newTime }));
        }
    };

    const handleProgressClick = (idx, e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        updateSeekPosition(idx, e.clientX, rect);
    };

    const handleProgressMouseDown = (idx, e) => {
        setIsDragging(true);
        setDragIndex(idx);
        const rect = e.currentTarget.getBoundingClientRect();
        updateSeekPosition(idx, e.clientX, rect);
    };

    const handleProgressMouseMove = (e) => {
        if (isDragging && dragIndex !== null) {
            const progressBar = e.currentTarget.querySelector('.progress-bar');
            if (progressBar) {
                const rect = progressBar.getBoundingClientRect();
                updateSeekPosition(dragIndex, e.clientX, rect);
            }
        }
    };

    const handleProgressMouseUp = () => {
        setIsDragging(false);
        setDragIndex(null);
    };

    const handlePlayPause = (group, idx) => {
        const audio = audioRefs.current[idx];
        if (!audio) return;

        if (currentGroupKey === group.key) {
            // toggle play/pause for the same group
            if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
            } else {
                audio.play();
                setIsPlaying(true);
            }
        } else {
            // pause previous group audio
            if (currentGroupKey !== null) {
                const prevIdx = groups.findIndex(g => g.key === currentGroupKey);
                if (audioRefs.current[prevIdx]) {
                    audioRefs.current[prevIdx].pause();
                    audioRefs.current[prevIdx].currentTime = 0;
                }
            }
            // start new group's first track
            setCurrentGroupKey(group.key);
            setIsPlaying(true);
            setTimeout(() => audio.play(), 0);
        }
    };

  return (
        <div className='mood-songs'>
            <h2>Recommended Songs</h2>
            {groups.map((group, index) => {
                const song = group.songs[0]; // representative track for group
                return (
                <div 
                    key={group.key} 
                    className="music-player-bar minimal-player" 
                    style={{position: 'static', marginBottom: '1rem'}}
                    onMouseMove={handleProgressMouseMove}
                    onMouseUp={handleProgressMouseUp}
                    onMouseLeave={handleProgressMouseUp}
                >
                    <div className="music-player-bar-inner">
                        <MoodIcon mood={song.mood} />
                        <div className="song-info">
                            <div className="song-title">{group.title}{group.songs.length > 1 ? ` (${group.songs.length})` : ''}</div>
                            <div className="song-artist">{group.songs.map(s => s.artist).filter((v,i,a)=>a.indexOf(v)===i).join(', ')}</div>
                        </div>
                        <div className="controls">
                            {!(isPlaying && currentGroupKey === group.key) && (
                                <button onClick={() => handlePlayPause(group, index)} className="play-pause-btn">
                                    {/* Play SVG icon */}
                                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="16" fill="url(#playGradient)" opacity="0.9"/>
                                        <path d="M12 8L24 16L12 24V8Z" fill="white"/>
                                        <defs>
                                            <linearGradient id="playGradient" x1="0" y1="0" x2="32" y2="32">
                                                <stop offset="0%" stopColor="#667eea"/>
                                                <stop offset="100%" stopColor="#764ba2"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </button>
                            )}
                            {(isPlaying && currentGroupKey === group.key) && (
                                <button onClick={() => handlePlayPause(group, index)} className="play-pause-btn">
                                    {/* Pause SVG icon */}
                                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="16" fill="url(#pauseGradient)" opacity="0.9"/>
                                        <rect x="10" y="8" width="4" height="16" rx="1.5" fill="white"/>
                                        <rect x="18" y="8" width="4" height="16" rx="1.5" fill="white"/>
                                        <defs>
                                            <linearGradient id="pauseGradient" x1="0" y1="0" x2="32" y2="32">
                                                <stop offset="0%" stopColor="#667eea"/>
                                                <stop offset="100%" stopColor="#764ba2"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </button>
                            )}
                        </div>
                        <div className="progress-section">
                            <span className="time-label">{formatTime(currentTime[index] || 0)}</span>
                            <div 
                                className="progress-bar" 
                                onClick={(e) => handleProgressClick(index, e)}
                                onMouseDown={(e) => handleProgressMouseDown(index, e)}
                            >
                                <div 
                                    className="progress-bar-fill" 
                                    style={{
                                        width: `${((currentTime[index] || 0) / (duration[index] || 1)) * 100}%`
                                    }}
                                >
                                    <div className="progress-handle"></div>
                                </div>
                            </div>
                            <span className="time-label">{formatTime(duration[index] || 0)}</span>
                        </div>
                        <audio
                            ref={el => audioRefs.current[index] = el}
                            src={song.audio}
                            onTimeUpdate={() => handleTimeUpdate(index)}
                            onLoadedMetadata={() => handleLoadedMetadata(index)}
                            onEnded={() => {
                                setIsPlaying(false);
                                setCurrentGroupKey(null);
                            }}
                            style={{display: 'none'}}
                        ></audio>
                    </div>
                </div>
                )
            })}
        </div>
  )
}

export default MoodSongs

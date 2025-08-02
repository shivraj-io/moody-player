import { ComputeAllFaceDescriptorsTask } from 'face-api.js'
import './MoodSongs.css'
import { useState, useRef } from 'react'


const MoodSongs = ({Songs}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(null);
    const audioRefs = useRef([]);

    const handlePlayPause = (song, idx) => {
        const audio = audioRefs.current[idx];
        if (currentSong === song) {
            if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
            } else {
                audio.play();
                setIsPlaying(true);
            }
        } else {
            // Pause previous audio if any
            if (currentSong !== null) {
                const prevIdx = Songs.findIndex(s => s === currentSong);
                if (audioRefs.current[prevIdx]) {
                    audioRefs.current[prevIdx].pause();
                    audioRefs.current[prevIdx].currentTime = 0;
                }
            }
            setCurrentSong(song);
            setIsPlaying(true);
            setTimeout(() => {
                audio.play();
            }, 0);
        }
    };

  return (
    <div  className='mood-songs'>
        <h2>Recommended Songs</h2>

        {Songs.map((song, index) => (
            <div key={index} id="alignn" className="song-item mb-4">
                <div className="title">
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                </div>
                <div className="song-controls">
                    <audio
                        ref={el => audioRefs.current[index] = el}
                        src={song.audio}
                        style={{display: 'none'}}
                    ></audio>
                    {!(isPlaying && currentSong === song) && (
                        <button
                            onClick={() => handlePlayPause(song, index)}
                            className="play-btn"
                        >
                            <i className="ri-play-fill"></i>
                        </button>
                    )}
                    {(isPlaying && currentSong === song) && (
                        <button
                            onClick={() => handlePlayPause(song, index)}
                            className="pause-btn"
                        >
                            <i className="ri-pause-line"></i>
                        </button>
                    )}
                </div>
            </div>
        ))}
      
    </div>
  )
}

export default MoodSongs

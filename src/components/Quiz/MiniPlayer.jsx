import { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

import classes from '../../styles/MiniPlayer.module.css';

const MiniPlayer = ({ videoID, videoTitle }) => {
  const [playerOpen, setPlayerOpen] = useState(false);
  const buttonRef = useRef();

  const videoUrl = `https://www.youtube.com/watch?v=${videoID}`;

  function toggleMiniPlayer() {
    if (!playerOpen) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setPlayerOpen(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setPlayerOpen(false);
    }
  }

  return (
    <div
      ref={buttonRef}
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      onClick={toggleMiniPlayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {' '}
        play_circle_filled{' '}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniPlayer}
      >
        {' '}
        close{' '}
      </span>

      <ReactPlayer
        url={videoUrl}
        width='300px'
        height='168px'
        playing={playerOpen}
        controls
      />
      <p>{videoTitle}</p>
    </div>
  );
};

export default MiniPlayer;

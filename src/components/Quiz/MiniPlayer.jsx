import videoImage from '../../assets/images/video.jpeg';
import classes from '../../styles/MiniPlayer.module.css';

const MiniPlayer = () => {
  return (
    <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
      <span className={`material-icons-outlined ${classes.open}`}>
        {' '}
        play_circle_filled{' '}
      </span>
      <span className={`material-icons-outlined ${classes.close}`}>
        {' '}
        close{' '}
      </span>
      <img src={videoImage} alt='video' />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default MiniPlayer;

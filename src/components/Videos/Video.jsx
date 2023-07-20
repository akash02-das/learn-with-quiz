import videoImage from '../../assets/images/video.jpeg';
import classes from '../../styles/Video.module.css';

const Video = () => {
  return (
    <a href='quiz.html'>
      <div className={classes.video}>
        <img src={videoImage} alt='Video image here' />
        <p>React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
};

export default Video;

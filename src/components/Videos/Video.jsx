import classes from '../../styles/Video.module.css';

const Video = ({ video }) => {
  const { title, youtubeID, noq } = video;

  return (
    <div className={classes.video}>
      <img
        src={`http://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total points: {noq * 5}</p>
      </div>
    </div>
  );
};

export default Video;

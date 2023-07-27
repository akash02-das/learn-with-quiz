import successImage from '../../assets/images/success.png';
import classes from '../../styles/Summary.module.css';

const Summary = ({ score, numOfQuestions }) => {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {numOfQuestions * 5}
        </p>
      </div>

      <div className={classes.badge}>
        <img src={successImage} alt='Success' />
      </div>
    </div>
  );
};

export default Summary;

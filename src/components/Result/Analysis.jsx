import Question from './Question';

import classes from '../../styles/Analysis.module.css';

const Analysis = ({ answers }) => {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>

      <Question answers={answers} />
    </div>
  );
};

export default Analysis;

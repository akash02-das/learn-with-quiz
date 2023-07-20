import CheckBox from '../CheckBox';

import classes from '../../styles/Answers.module.css';

const Answers = () => {
  return (
    <div className={classes.answers}>
      <CheckBox labelClass={classes.answer} text='Test answer' />
    </div>
  );
};

export default Answers;

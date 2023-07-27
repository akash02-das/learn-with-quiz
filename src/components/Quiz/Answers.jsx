import CheckBox from '../CheckBox';

import classes from '../../styles/Answers.module.css';

const Answers = ({ options = [], handleChange }) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <CheckBox
          key={index}
          labelClass={classes.answer}
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
};

export default Answers;

import { useRef, useState } from 'react';

import Button from '../Button';

import classes from '../../styles/ProgressBar.module.css';

const ProgressBar = ({ next, prev, progress, submit }) => {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();

  const toggleTooltip = () => {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = 'none';
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = 'block';
    }
  };

  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className='material-icons-outlined'> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div ref={tooltipRef} className={classes.tooltip}>
          {progress}% Complete!
        </div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}
          ></div>
        </div>
      </div>

      <Button
        className={classes.next}
        onClick={progress === 100 ? submit : next}
      >
        <span>{progress === 100 ? 'Submit Quiz' : 'Next Question'}</span>
        <span className='material-icons-outlined'> arrow_forward </span>
      </Button>
    </div>
  );
};

export default ProgressBar;

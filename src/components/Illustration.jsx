import classes from '../styles/Illustration.module.css';

const Illustration = ({ image }) => {
  return (
    <div className={classes.illustration}>
      <img src={image} alt='Image' />
    </div>
  );
};

export default Illustration;

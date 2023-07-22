import classes from '../styles/Form.module.css';

const Form = ({ children, ...rest }) => {
  return (
    <form className={`${classes.form}`} action='#' {...rest}>
      {children}
    </form>
  );
};

export default Form;

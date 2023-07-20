import classes from '../styles/Form.module.css';

const Form = ({ children, signUpClass, ...rest }) => {
  return (
    <form className={`${signUpClass} ${classes.form}`} action='#' {...rest}>
      {children}
    </form>
  );
};

export default Form;

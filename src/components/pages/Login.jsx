import TextInput from '../../components/TextInput';
import Button from '../Button';
import Form from '../Form';
import Illustration from '../Illustration';

import loginImage from '../../assets/images/login.svg';
import classes from '../../styles/Login.module.css';

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className='column'>
        <Illustration image={loginImage} />
        <Form signUpClass={classes.login}>
          <TextInput
            type='text'
            placeholder='Enter email'
            icon='alternate_email'
          />
          <TextInput type='password' placeholder='Enter password' icon='lock' />

          <Button>
            <span>Login Now</span>
          </Button>

          <div className='info'>
            {`Don't have an account?`} <a href='signup.html'>SignUp</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;

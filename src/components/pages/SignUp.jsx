import SignupForm from '../Auth/SignupForm';
import Illustration from '../Illustration';

import signUpImage from '../../assets/images/signup.svg';

const SignUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className='column'>
        <Illustration image={signUpImage} />
        <SignupForm />
      </div>
    </>
  );
};

export default SignUp;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import Button from '../Button';
import CheckBox from '../CheckBox';
import Form from '../Form';
import TextInput from '../TextInput';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Do validation
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setLoading(true);
      setError('');
      await signup(email, password, username);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError('Failed to create an account!');
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={{ height: '500px' }}>
      <TextInput
        required
        type='text'
        placeholder='Enter name'
        icon='person'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        required
        type='text'
        placeholder='Enter email'
        icon='alternate_email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        required
        type='password'
        placeholder='Enter password'
        icon='lock'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        required
        type='password'
        placeholder='Confirm password'
        icon='lock_clock'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {error && <p className='error'>{error}</p>}

      <CheckBox
        required
        text='I agree to the Terms & Conditions'
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />

      <Button type='submit' disabled={loading}>
        <span>Sign Up Now</span>
      </Button>

      <div className='info'>
        Already have an account? <Link to='/login'>Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignupForm;

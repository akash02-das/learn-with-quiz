import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import Button from '../Button';
import Form from '../Form';
import TextInput from '../TextInput';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError('');
      await login(email, password);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError('Failed to login!');
    }
  };

  return (
    <Form style={{ height: '330px' }} onSubmit={handleSubmit}>
      <TextInput
        type='text'
        placeholder='Enter email'
        icon='alternate_email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type='password'
        placeholder='Enter password'
        icon='lock'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && (
        <p className='error' style={{ marginBottom: '15px' }}>
          {error}
        </p>
      )}

      <Button type='submit' disabled={loading}>
        <span>Login Now</span>
      </Button>

      <div className='info'>
        {`Don't have an account?`} <Link to='/signup'>SignUp</Link> instead.
      </div>
    </Form>
  );
};

export default LoginForm;

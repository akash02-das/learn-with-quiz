import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AuthProvider } from '../contexts/AuthContext';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import SignUp from './pages/SignUp';

import '../styles/App.css';
import PrivateOutlet from './Routes/PrivateOutlet';
import PublicOutlet from './Routes/PublicOutlet';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<Home />} />
            <Route path='/*' element={<PublicOutlet />}>
              <Route path='signup' element={<SignUp />} />
              <Route path='login' element={<Login />} />
            </Route>

            {/* Private Routes */}
            <Route path='/*' element={<PrivateOutlet />}>
              <Route path='quiz' element={<Quiz />} />
              <Route path='result' element={<Result />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;

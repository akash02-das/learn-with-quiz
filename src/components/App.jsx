import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AuthProvider } from '../contexts/AuthContext';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import SignUp from './pages/SignUp';

import '../styles/App.css';

// import { initializeApp } from 'firebase/app';
// import app from '../firebase';
// initializeApp(app);

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/result' element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;

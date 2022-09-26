import './App.css';
import { useState, useEffect } from 'react';
import {  
  Routes, 
  Route,
  useNavigate, 
} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header';
import Form from './Components/Form';
import Dashboard from './Pages/Dashboard';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/')
    }
  }, [navigate])

  const handleAction = (id) => {
    const authentication = getAuth();

    if (id === "login") {
      signInWithEmailAndPassword(authentication, email, password)
        .catch((error) => {
          if(error.code === 'auth/wrong-password'){
            toast.error('Please check the Password');
          }
          if(error.code === 'auth/user-not-found'){
            toast.error('Please check the Email');
          }
        })
        .then((response) => {
          if(response !== undefined) {
            navigate('/')
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          }
        })
    }
    
    if (id === "register") {
      createUserWithEmailAndPassword(authentication, email, password)
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
          }
        })
        .then((response) => {
          if(response !== undefined) {
            navigate('/')
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          }
        })
    }

  }
  
  return (
    <div className='app'>
      <Header />
      <>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route 
            path='/login' 
            element={
              <Form 
                title="Login" 
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction("login")} />} 
          />
          <Route 
            path='/register' 
            element={
              <Form 
              title="Register" 
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction("register")} />} 
          />
        </Routes>
      </>
      <ToastContainer />
    </div>
  );
}

export default App;

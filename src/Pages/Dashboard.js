import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RoundForm from '../Components/RoundForm';
import RoundTable from '../Components/RoundTable';

function Dashboard() {
  
  const navigate = useNavigate();

  useEffect(() => {
      const authToken = sessionStorage.getItem('Auth Token')

      if (authToken) {
        navigate('/')
      }

      if (!authToken) {
        navigate('/register')
      }
  }, [navigate])

  return (
    <div className='wrapper'>
        <RoundForm />
        <RoundTable />
    </div>
  )
}

export default Dashboard;
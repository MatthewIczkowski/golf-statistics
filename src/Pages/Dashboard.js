import { Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RoundForm from '../Components/RoundForm';
import RoundTable from '../Components/RoundTable';
import Box from '@mui/material/Box';

function Dashboard() {
  
  const navigate = useNavigate();

  useEffect(() => {
      const authToken = sessionStorage.getItem('Auth Token')

      if (authToken) {
        navigate('/')
      }

      if (!authToken) {
        navigate('/login')
      }
  }, [navigate])

  return (
     <Box sx={{m: 5}}>
        <Stack spacing={3}>
            <RoundForm />
            <RoundTable />
        </Stack>
     </Box>
        
  )
}

export default Dashboard;
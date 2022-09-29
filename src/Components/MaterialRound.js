import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

const MaterialRound = () => {
  const [courseName, setCourseName] = useState('');
  const [holes, setHoles] = useState('');
  const [score, setScore] = useState('');

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "courseName"){
        setCourseName(value);
    }
    if(id === "holes"){
        setHoles(value);
    }
    if(id === "score"){
        setScore(value);
    }
  }

  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        padding: '20px',
      }}
    >
      <h3>Material UI Form</h3>
      <InputLabel id="demo-simple-select-label">Holes</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={holes}
        label="Holes"
        onChange={handleInputChange}
      >
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={18}>18</MenuItem>
      </Select>

    </Box>
  )
}

export default MaterialRound
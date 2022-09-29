import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

const MaterialRound = () => {
  const [holes, setHoles] = useState('');

  const handleChange = (e) => {
    setHoles(e.target.value);
  };

  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        padding: '20px',
      }}
    >
      <Typography>Material UI Form</Typography>
      <InputLabel id="demo-simple-select-label">Holes</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={holes}
        label="Holes"
        onChange={handleChange}
      >
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={18}>18</MenuItem>
      </Select>

    </Box>
  )
}

export default MaterialRound
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { TextField, Button } from '@mui/material';
import { db } from '../firebase'
import { addDoc, collection } from "firebase/firestore";

const RoundForm = () => {
  const [courseName, setCourseName] = useState('');
  const [holes, setHoles] = useState('');
  const [score, setScore] = useState('');

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "courseName"){
        setCourseName(value);
    }
    if(id === "score"){
        setScore(value);
    }
  }

  const handleSubmit  = () => {
    let obj = {
      courseName : courseName,
      holes: holes,
      score: score,
    }
    addDoc(collection(db, "rounds"), obj);
    // console.log(courseName, holes, score);
  }

  return (
    <Box
      component="form"
      sx={{
        width: 300,
        height: 300,
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      autoComplete="off"
    >
      <h3>Material UI Form</h3>
      <TextField
          id="courseName"
          label="Course Name"
          type="text"
          value={courseName}
          onChange={handleInputChange}
      />
      <InputLabel id="holes">Holes</InputLabel>
      <Select
        id="holes"
        value={holes}
        label="Holes"
        autoWidth
        onChange={(e) => setHoles(e.target.value)}
      >
      <MenuItem value={9}>9</MenuItem>
      <MenuItem value={18}>18</MenuItem>
      </Select>
      <TextField
          id="score"
          label="Score"
          type="number"
          value={score}
          onChange={handleInputChange}
      />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </Box>
  )
}

export default RoundForm
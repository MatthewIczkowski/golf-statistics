import React, { useCallback, useState } from 'react';
import { db } from '../firebase'
import { addDoc, collection } from "firebase/firestore";
import { 
  TextField, 
  Button, 
  FormControl, 
  Stack, FormLabel, 
  FormControlLabel, 
  Radio, 
  RadioGroup } from '@mui/material';

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

  const handleSubmit  = useCallback(() => {
    let obj = {
      courseName : courseName,
      holes: holes,
      score: score,
    }
    addDoc(collection(db, "rounds"), obj);
    // console.log(courseName, holes, score);
    setCourseName('');
    setHoles('');
    setScore('');
  }, [courseName, holes, score]);

  return (
    <form>
      <h3>Material UI Form</h3>
      <TextField
          id="courseName"
          label="Course Name"
          type="text"
          variant="outlined"
          value={courseName}
          onChange={handleInputChange}
          sx={{width: 300, margin: 4}}
      />
      <Stack direction='row' sx={{justifyContent: 'space-between', alignItems: 'flex-end'}}>
      <FormControl component="fieldset" variant="filled" sx={{margin: 4}}>
          <FormLabel component="legend" htmlFor="holes-radio">
            Number of Holes
          </FormLabel>
          <RadioGroup
            aria-label="holes"
            id="holes-radio"
            defaultValue={18}
            name="radio-buttons-group"
            onChange={(e) => setHoles(e.target.value)}
          >
            <FormControlLabel
              value={18}
              control={<Radio />}
              label="18"
            />
            <FormControlLabel
              value={9}
              control={<Radio />}
              label="9"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          id="score"
          label="Score"
          type="number"
          value={score}
          onChange={handleInputChange}
          sx={{width: 300, margin: 4}}
        />
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Stack>
    </form>
  )
}

export default RoundForm
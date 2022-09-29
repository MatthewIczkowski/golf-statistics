import React from 'react';
import { useState } from 'react';
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
    if(id === "holes"){
        setHoles(value);
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
    <div className="form">
      <h3>Round Form</h3>
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="courseName">Course Name </label>
          <input className="form__input" type="text" value={courseName} onChange={(e) => handleInputChange(e)} id="courseName" placeholder="Course Name"/>
        </div>
        <div className="lastname">
          <label className="form__label" for="holes">Holes </label>
          <input className="form__input" type="number" name="" id="holes" value={holes} onChange={(e) => handleInputChange(e)} placeholder="Holes"/>
        </div>
        <div className="email">
          <label className="form__label" for="score">Score </label>
          <input className="form__input" type="number" id="score"  value={score} onChange = {(e) => handleInputChange(e)} placeholder="Score"/>
        </div>
      </div>
      <div className="footer">
          <button onClick={()=>handleSubmit()} type="submit" className="btn">Submit</button>
      </div>
    </div>
  )
}

export default RoundForm
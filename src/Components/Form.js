import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function BasicTextFields({ title, setPassword, setEmail, handleAction }) {

    return (
        <div className='wrapper'>
            <div>
                <div className="heading-container">
                    <h3>{title}</h3>
                </div>

                <Box
                    component="form"
                    sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                    noValidate
                    autoComplete="off"
                >
                    <TextField 
                        id="email"
                        variant="filled" 
                        label="Enter Email" 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <TextField
                        id="password"
                        variant="filled"
                        label="Enter Password"
                        type="password"
                        //autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)} 
                    />  
                    {title==="Register" && <p>Already have an account? <Link to="/login"> Log In </Link></p>}
                    {title==="Login" && <p>Do not have an account? <Link to="/register">Register</Link></p>}
                </Box>
                <Button variant="contained" onClick={handleAction}>{title}</Button>
            </div>
        </div>
        
    );
}
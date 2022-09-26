import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from './Button';
import { Link } from 'react-router-dom';

export default function BasicTextFields({ title, setPassword, setEmail, handleAction }) {

    return (
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
                label="Enter Email" 
                variant="outlined" 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <TextField 
                id="password" 
                label="Enter Password" 
                variant="outlined" 
                onChange={(e) => setPassword(e.target.value)} 
            />
            {title==="Register" && <p>Already have an account? <Link to="/login"> Log In </Link></p>}
            {title==="Login" && <p>Do not have an account? <Link to="/register">Register</Link></p>}
            </Box>
            <Button title={title} handleAction={handleAction} />
        </div>
        
    );
}
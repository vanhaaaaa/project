// src/components/Register.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase';
import { Navigate, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Container, Input } from 'reactstrap';
import { TextField } from '@mui/material';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
const Register = () => {
  const navigete=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Handle successful registration (e.g., redirect, show message)


      
      navigete('/login');
    } catch (error) {
      setError(error.message); // Display error message
    }
  };

  return (
    
    <div className='form_login'>
     <Container>
      <form onSubmit={handleRegister}>
      <h2>Register</h2>
       
          <TextField
            label="email"
            variant="standard"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
      <br/>
      
          <TextField
          label="password"
          variant="standard"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
      <br/>
      <div className='mt-4'>
        <Button type="submit">Register</Button>
        <Link to={'/login'}>login</Link>
        </div>
        <div className='icon_home'>
        <Link to={'/'}><HomeSharpIcon/></Link>
        </div>
      </form>
      {error && <p>{error}</p>}
      </Container>
    </div>
  );
};

export default Register;
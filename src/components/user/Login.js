// src/components/Login.js
import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router';
import SignOut from './SignOut';
import { Button, Container, Input } from 'reactstrap';
import './style.scss';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { TextField } from '@mui/material';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user information in local storage
      localStorage.setItem('user', JSON.stringify({
        uid: user.uid,
        email: user.email,
        // You can store more user info if needed
      }));
      Swal.fire({
        title: "xin chào quý khách!",
        html: "Chúc quý khách có 1 ngày tốt đẹp",
        icon:"success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
           
        }
        navigate('/');
    });

    
    } catch (error) {
      setError(error.message); // Display error message
    }


  };

  useEffect(() => {
    // Retrieve user information from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  return (
    <>
      <div className='form_login'>
        {
          user != null ?
            <Container>
              <h1>
                xin chao
              </h1>
              <h1>email: {user.email}</h1>
          <SignOut/>
            </Container>

            :


            <Container>
           

              <form onSubmit={handleLogin}>
              <h2>login</h2>
             
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
                    type="password"
                    variant="standard"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
              <br/>
              <div className='mt-4'>
                <Button type="submit">Login</Button>
                {error && <p>{error}</p>}
                <Link to={'/register'}>register</Link>
                </div>
                <div className='icon_home'>
                <Link to={'/'}><HomeSharpIcon/></Link>
                </div>
              </form>
            </Container>
        }
      </div>
    </>
  );

};

export default Login;
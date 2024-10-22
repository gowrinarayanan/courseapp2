import axios from 'axios';
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    axios.post("http://localhost:3002/user/login",credentials)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        
        
        if (res.data.usertoken) {
          localStorage.setItem("token", res.data.usertoken); 
          navigate('/home'); 
        }
      })
      
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="standard"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <br /><br />
        <TextField
          label="Password"
          variant="standard"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <br /><br />
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: 'black' }}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;

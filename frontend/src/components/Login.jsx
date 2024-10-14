

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
    
    // Check for hardcoded username and password
    if (credentials.username === 'admin' && credentials.password === '123') {
      alert('Login successful!');
      navigate('/home'); // Redirect to the home page
    } else {
      alert('Login failed! Please check your username and password.');
    }
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

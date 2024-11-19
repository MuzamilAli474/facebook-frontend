import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import axios from 'axios';

const Login = () => {
  // State for form inputs and messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      setSuccess(response.data.message);
      console.log(response);

      // Optionally, save the token for authentication
      localStorage.setItem('authToken', response.data.token);
    } catch (err) {
      setError( 'Something went wrong' + err);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: '50px auto' }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <Box display="flex" flexDirection="column" gap="20px">
          <TextField
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            required
            fullWidth
          />
          {error && (
            <Typography color="error" textAlign="center">
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="primary" textAlign="center">
              {success}
            </Typography>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Login;

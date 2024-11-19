import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import axios from 'axios';

const OtpVerification = () => {
  // State for OTP and email
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form submission
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:5000/api/users/verifyOTP', { email, otp }); // Update with your backend endpoint
      setSuccess(response.data.message);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
      console.log(err)
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: '50px auto' }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Verify OTP
      </Typography>
      <form onSubmit={handleVerifyOtp}>
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
            label="OTP"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
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
            Verify OTP
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default OtpVerification;

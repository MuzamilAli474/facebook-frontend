import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const LogoutButton = () => {
  const navigate = useNavigate();  // Initialize the useNavigate hook

  const handleLogout = () => {
    // Remove authToken from localStorage
    localStorage.removeItem('authToken');
    console.log('Auth token removed from localStorage');
    
    // Redirect to login page using react-router
    navigate('/login');
  };

  return (
    <Button 
      variant="contained" 
      color="primary" 
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;

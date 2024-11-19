import React, { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [sentOtp, setSentOtp] = useState(null);

  // Send OTP to email
  const sendOTP = async () => {
    try {
      const response = await fetch('http://localhost:3000/sendotp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      if (response.ok) {
        alert('OTP sent to your email');
        setSentOtp(data.otp); // Store OTP temporarily
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send OTP');
    }
  };

  // Verify OTP
  const verifyOTP = () => {
    if (otp === sentOtp) {
      alert('Email verified successfully!');
      setSentOtp(null); // Clear OTP after successful verification
    } else {
      alert('Incorrect OTP');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
      password
    };

    try {
      const response = await fetch('http://localhost:3000/singUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "User is already registered with this email");
      }

      console.log("Data saved:", result);
      alert('Registration successful');
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setOtp('');
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "An unknown error occurred");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} id="registrationForm">
        <h2>Register</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="button" onClick={sendOTP}>Send OTP</button>

        <label htmlFor="otp">Enter OTP:</label>
        <input
          type="text"
          id="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="button" onClick={verifyOTP}>Verify OTP</button>

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

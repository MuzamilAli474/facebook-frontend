import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [photo, setPhoto] = useState(null);
    const [message, setMessage] = useState('');

    // Handle file input change
    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare FormData to send in the request
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (photo) {
            formData.append('photo', photo);
        }

        // Get the token from localStorage (assuming it's stored there)
        const token = localStorage.getItem('authToken');

        // Log the token to ensure it's being fetched
        console.log('Auth token:', token);

        // Check if token exists (user should be authenticated)
        if (!token) {
            setMessage('User is not authenticated!');
            return;
        }

        try {
            // Use fetch to send POST request
            const response = await fetch('http://localhost:3000/createPost', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`, // Include the JWT token in headers
                },
                body: formData, // Send FormData (this automatically sets the correct content-type)
            });

            // Check if the request was successful
            if (response.ok) {
                const data = await response.json();
                setTitle('');
                setContent('');
                setPhoto('');
                setMessage(data.message); // Success message from the response
            } else {
                const errorData = await response.json();
                setMessage('Error: ' + errorData.message); // Error message from the response
                console.error('Error response:', errorData);
            }
        } catch (error) {
            setMessage('Error: ' + error.message); // General error if request fails
            console.error('Fetch request failed:', error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
            <Typography variant="h6" gutterBottom>Create a Post</Typography>

            {/* Title Input */}
            <TextField
                fullWidth
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                margin="normal"
            />

            {/* Content Input */}
            <TextField
                fullWidth
                label="Content"
                variant="outlined"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                margin="normal"
                multiline
                rows={4}
            />

            {/* File Upload Button */}
            <Button
                variant="contained"
                component="label"
                fullWidth
                sx={{ marginBottom: 2 }}
            >
                Upload Photo
                <input
                    type="file"
                    hidden
                    onChange={handleFileChange}
                />
            </Button>
            {photo && <Typography variant="body2">{photo.name}</Typography>}

            {/* Submit Button */}
            <Button variant="contained" color="primary" type="submit" fullWidth>
                Submit
            </Button>

            {/* Error/Success Message */}
            {message && <Typography variant="body2" color={message.startsWith('Error') ? 'error' : 'primary'} sx={{ mt: 2 }}>{message}</Typography>}
        </Box>
    );
};

export default PostForm;

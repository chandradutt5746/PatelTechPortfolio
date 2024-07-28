import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Grid, Box, Alert } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import './Contact.css'; // Import the CSS file

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/contact-messages/', formData)
            .then(response => {
                setSuccess(true);
                setError(false);
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(error => {
                setSuccess(false);
                setError(true);
            });
    };

    return (
        <Container className="contact-container">
            <Typography variant="h4" component="h2" gutterBottom align="center">
                Contact Me
            </Typography>
            <Typography variant="body1" component="p" gutterBottom align="center">
                Feel free to reach out to me via the form below or connect with me on GitHub and LinkedIn.
            </Typography>
            <form className="contact-form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Name"
                            fullWidth
                            variant="outlined"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            variant="outlined"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="message"
                            name="message"
                            label="Message"
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Box textAlign="center" marginTop={2}>
                    <Button type="submit" variant="contained" color="primary">
                        Send Message
                    </Button>
                </Box>
            </form>
            {success && <Alert severity="success" className="alert">Message sent successfully!</Alert>}
            {error && <Alert severity="error" className="alert">There was an error sending your message. Please try again.</Alert>}
            <Box textAlign="center" marginTop={4}>
                <Button
                    startIcon={<GitHub />}
                    href="https://github.com/chandradutt5746"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    className="contact-button"
                >
                    GitHub
                </Button>
                <Button
                    startIcon={<LinkedIn />}
                    href="https://www.linkedin.com/in/cnpatel5746/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    className="contact-button"
                >
                    LinkedIn
                </Button>
            </Box>
        </Container>
    );
}

export default Contact;

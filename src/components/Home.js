import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css';
import Profileimg from '../img/20230216_145656_resized.jpg';
import backvid from '../img/backvid.mov'

function Home() {
    return (
        <div>
        <video autoPlay loop muted className="background-video">
            <source src={backvid} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <Container>
                <Grid container spacing={4} alignItems="center" className='content'>
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Welcome to PatelTechPortfolio
                    </Typography>
                    <Typography variant="h6" component="p" gutterBottom>
                        Showcasing the best of my projects and skills.
                    </Typography>
                    <Button variant="contained" color="primary" component={Link} to="/projects">
                        View Projects
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* Add an image or illustration */}
                    <img src={Profileimg} alt="Tech" style={{ width: '60%', borderRadius: '8px' }} />
                </Grid>
            </Grid>
        </Container>
        </div>
    );
}

export default Home;

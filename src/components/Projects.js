import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardActionArea, Grid, CardActions, Chip } from '@mui/material';
import './Projects.css'; // Import the CSS file


const truncateText = (text, limit) => {
    if (text.length <= limit) {
        return text;
    }
    return text.slice(0, text.slice(0, limit).lastIndexOf(' ')) + '...';
};


function Projects() {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/projects/')
            .then(response => {
                console.log('API Response:', response.data);  // Log the fetched data
                setProjects(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the projects!', error);
                setError('There was an error fetching the projects. Please try again later.');
            });
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <Container className="projects-container">
            <Typography variant="h2" component="h2" gutterBottom align="center">
                Projects
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {projects.length > 0 ? projects.map(project => (
                    <Grid item key={project.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className="project-card">
                            <CardActionArea component={RouterLink} to={`/projects/${project.id}`}>
                                <img
                                    src={project.image}  
                                    alt={project.title}
                                    className="project-image"
                                />
                                <CardContent>
                                    <Typography variant="h6" component="h3" className="project-title" gutterBottom>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" component="p" className="project-description">
                                        {truncateText(project.description, 100)}
                                    </Typography>
                                </CardContent>
                                <CardActions className="skills-container">
                                    {project.skills.map(skill => (
                                        <Chip key={skill.name} label={skill.name} className="skill-chip" />
                                    ))}
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )) : (
                    <Typography variant="h6" align="center">
                        No projects found.
                    </Typography>
                )}
            </Grid>
        </Container>
    );
}

export default Projects;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Card, CardContent, CardMedia, Grid, Chip } from '@mui/material';
import './ProjectDetail.css';

function ProjectDetail() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/projects/${id}/`)
            .then(response => {
                setProject(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the project!', error);
                setError('There was an error fetching the project. Please try again later.');
            });
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="project-detail-container">
            <Card className="project-detail-card">
                <CardMedia
                    component="img"
                    height="250"
                    image={project.image}
                    alt={project.title}
                />
                <CardContent>
                    <Typography variant="h4" component="h2" gutterBottom>
                        {project.title}
                    </Typography>
                    <Typography variant="body1" component="p" className="project-description">
                        {project.description.split('\n').map((line, index) => (
                            <React.Fragment key={index}>{line}<br /></React.Fragment>
                        ))}
                    </Typography>
                    <Grid container spacing={1} className="skills-container">
                        {project.skills.map(skill => (
                            <Grid item key={skill.name}>
                                <Chip label={skill.name} className="skill-chip" />
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
}

export default ProjectDetail;

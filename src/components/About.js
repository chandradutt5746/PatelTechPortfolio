import React from 'react';
import { Container, Typography, Grid, Box, Paper, Chip, Divider, Card, CardContent } from '@mui/material';
import styled from '@emotion/styled';
import './About.css'; // Import the CSS file
import {
    Code as CodeIcon,
    Cloud as CloudIcon,
    Storage as StorageIcon,
    Build as BuildIcon,
    AccountTree as AccountTreeIcon
} from '@mui/icons-material';

const RootContainer = styled(Container)`
  margin-top: 40px;
  margin-bottom: 40px;
`;

// const LargeAvatar = styled(Avatar)`
//   width: 150px;
//   height: 150px;
//   margin: auto;
// `;

const Section = styled(Box)`
  margin-top: 40px;
`;

const SummaryCard = styled(Card)`
  margin-top: 20px;
  background-color: #f5f5f5;
  padding: 20px;
`;

const EducationCard = styled(Card)`
  margin-top: 20px;
  background-color: #f5f5f5;
  padding: 20px;
`;

const CategoryPaper = styled(Paper)`
  padding: 16px;
  margin-bottom: 20px;
  background-color: ${props => props.bgcolor || '#f5f5f5'};
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.hoverbgcolor || '#f0f0f0'};
  }

  &:hover .skill-chip {
    background-color: #333;
    color: #fff;
    border: 1px solid #333;
  }
`;

const skills = {
    Methodology: ['SDLC', 'Agile', 'Scrum', 'Waterfall'],
    Languages: ['Python', 'C++', 'JavaScript', 'TypeScript', 'Machine Learning', 'BigQuery'],
    Frameworks: ['Django', 'Django Rest Framework', 'ReactJS', 'FastAPI', 'Flask', 'NodeJS', 'Angular'],
    'IDEs and Web Scraping': ['VS Code', 'PyCharm', 'Jupyter Notebook', 'NetBeans', 'IntelliJ IDEA', 'Beautiful Soup', 'Scrapy', 'static analysis', 'Linux'],
    Packages: ['NumPy', 'Pandas', 'Matplotlib', 'PySpark', 'PyTorch', 'TensorFlow'],
    'Web Technologies': ['HTML', 'CSS', 'JavaScript', 'Redux', 'jQuery', 'Ajax', 'JSON', 'XML', 'Mockito', 'REST'],
    'Cloud Technologies': ['AWS', 'GCP', 'Microsoft Azure', 'Kubernetes'],
    'Databases and Technologies': ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Hadoop', 'Spark', 'Hive', 'DynamoDB'],
    'Soft Skills': ['Problem Solving', 'Communication', 'Teamwork', 'Adaptability', 'Project Management'],
    'Version Control Tools': ['Git', 'GitHub', 'Docker', 'Jira', 'MATLAB']
};

const categoryColors = {
    Methodology: '#FFEBEE',
    Languages: '#E8F5E9',
    Frameworks: '#E3F2FD',
    'IDEs and Web Scraping': '#FFF3E0',
    Packages: '#F3E5F5',
    'Web Technologies': '#E0F2F1',
    'Cloud Technologies': '#FFFDE7',
    'Databases and Technologies': '#FBE9E7',
    'Soft Skills': '#EDE7F6',
    'Version Control Tools': '#E1F5FE'
};

const getCategoryIcon = (category) => {
    switch (category) {
        case 'Methodology':
            return <AccountTreeIcon />;
        case 'Languages':
        case 'Frameworks':
            return <CodeIcon />;
        case 'Cloud Technologies':
            return <CloudIcon />;
        case 'Databases and Technologies':
            return <StorageIcon />;
        case 'Soft Skills':
        case 'Version Control Tools':
            return <BuildIcon />;
        default:
            return <CodeIcon />;
    }
};

function About() {
    return (
        <RootContainer>
            <Grid container spacing={1} alignItems="baseline">
                {/* <Grid item xs={12} sm={80} style={{ textAlign: 'center' }}>
                    <LargeAvatar alt="Chandradutt Patel" src="http://127.0.0.1:8000/media/images/20230216_145656_resized.jpg" 
                    style={{height: '50%', width: '50%', borderRadius: '8px' }} />
                </Grid> */}
                <Grid item xs={12} sm={80}>
                    <Typography variant="h3" component="h2" gutterBottom>
                        About Me
                    </Typography>
                    <SummaryCard>
                        <CardContent>
                            <Typography variant="h5" component="h3" gutterBottom>
                                Professional Summary
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom>
                                Hi, I'm Chandradutt Patel, a dedicated Software Engineer based in London, UK. With over 3 years of comprehensive experience in the IT industry, I bring a wealth of expertise in System Analysis, Design, Development, Testing, Implementation, and Support of Application Software. My proficiency spans both backend and frontend development, ensuring a holistic approach to building robust and scalable software solutions.<br></br>                                
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom>
                                I specialize in backend development using Python, Django, Flask, and PySpark, designing and developing scalable systems, and ensuring efficient data handling and processing with tools like Databricks and AWS services. On the frontend, I excel in creating responsive and interactive applications using React, Angular, and TypeScript, combined with my knowledge of HTML, CSS, JavaScript, Bootstrap, jQuery, Ajax, and JSON, ensuring a seamless user experience. My full stack capabilities are further enhanced by my experience with Node.js, Express, and a variety of databases including MySQL, PostgreSQL, MongoDB, SQLite, and DynamoDB.<br></br>
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom>
                                I have substantial experience in deploying and managing applications in cloud environments using AWS and Terraform, and my skills in CI/CD pipelines using GitHub Actions, Docker, and Kubernetes ensure smooth and continuous software delivery. Well-versed in various Software Development Life Cycle (SDLC) methodologies such as Agile, Scrum, and Waterfall, I adapt to different project needs to deliver high-quality results.<br></br>
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom>
                                My technical toolkit includes a solid foundation in Object-Oriented Programming (OOPs) with languages like Python, JavaScript, C, and C++. I am adept at using IDEs like Visual Studio Code and Jupyter Notebook for efficient development. Leveraging Python libraries such as NumPy, Pandas, Matplotlib, PySpark, PyTorch, and TensorFlow, I perform complex data analysis and machine learning tasks, ensuring data-driven decision-making. My problem-solving abilities, excellent communication, teamwork, adaptability, and project management skills have been honed through mentoring junior developers and collaborating with cross-functional teams.
                            </Typography>
                            <Typography variant="body1" component="p" gutterBottom>
                                I am passionate about leveraging my full stack development skills to drive innovation and success in every project I undertake. My commitment to continuous learning and adopting new technologies ensures that I stay at the forefront of the industry, ready to tackle complex technical challenges and deliver exceptional results. Let's connect and explore how I can contribute to your next big project!
                            </Typography>
                        </CardContent>
                    </SummaryCard>
                </Grid>
            </Grid>

            <Section>
                <Typography variant="h5" component="h3" gutterBottom>
                    Skills
                </Typography>
                {Object.entries(skills).map(([category, items]) => (
                    <CategoryPaper
                        key={category}
                        elevation={3}
                        bgcolor={categoryColors[category]}
                        hoverbgcolor={categoryColors[category]}
                    >
                        <Typography variant="h6" component="h4" gutterBottom>
                            {getCategoryIcon(category)} {category}
                        </Typography>
                        <Divider />
                        <Box mt={2}>
                            <Grid container spacing={1}>
                                {items.map((item) => (
                                    <Grid item key={item}>
                                        <Chip label={item} className="skill-chip" />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </CategoryPaper>
                ))}
            </Section>

            <Section>
                <Typography variant="h5" component="h3" gutterBottom>
                    Education
                </Typography>
                <EducationCard>
                    <CardContent>
                        <Typography variant="body1" component="p" gutterBottom>
                            <strong>MSc in Computer Science, Big Data Technologies</strong><br />
                            University of East London, London, UK
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            <strong>Master of Computer Applications</strong><br />
                            Nirma University, Ahmedabad, India
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            <strong>Bachelor of Computer Applications</strong><br />
                            Gujarat University, Ahmedabad, India
                        </Typography>
                    </CardContent>
                </EducationCard>
            </Section>
        </RootContainer>
    );
}

export default About;

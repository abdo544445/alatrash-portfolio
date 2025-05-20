import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container as MuiContainer, Box, Card as MuiCard, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { Grid } from '../components/ui/MuiFixedComponents';

// Use type-fixed container
const Container = MuiContainer as any;
const Card = MuiCard as any;

// Sample project data - in a real app this would come from a database
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'A full-stack e-commerce platform with user authentication and payment processing.',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects and skills.',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['React', 'TypeScript', 'Material-UI']
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity app to help users manage their tasks and projects.',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['React', 'Firebase', 'Redux']
  }
];

const Projects: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          My Projects
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {projectsData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech) => (
                        <Typography 
                          key={tech} 
                          variant="caption" 
                          sx={{ 
                            bgcolor: 'primary.main', 
                            color: 'white', 
                            px: 1, 
                            py: 0.5, 
                            borderRadius: 1 
                          }}
                        >
                          {tech}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container as MuiContainer, Box, Paper as MuiPaper, Avatar } from '@mui/material';
import { Grid } from '../components/ui/MuiFixedComponents';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DevicesIcon from '@mui/icons-material/Devices';

// Use MUI components directly or with type fixes
const Paper = MuiPaper as any;
const Container = MuiContainer as any;

const About: React.FC = () => {
  const skills = [
    { name: 'Development', icon: <CodeIcon fontSize="large" />, description: 'Building robust web applications using modern JavaScript frameworks' },
    { name: 'Design', icon: <DesignServicesIcon fontSize="large" />, description: 'Creating beautiful user interfaces with attention to detail' },
    { name: 'Responsive', icon: <DevicesIcon fontSize="large" />, description: 'Ensuring websites work flawlessly across all devices' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          About Me
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Abdo Alatrash
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Web Developer & Designer
              </Typography>
              <Typography paragraph>
                I am a passionate web developer with experience in creating modern, responsive websites
                and web applications. I specialize in front-end development with React and have expertise
                in building user-friendly interfaces.
              </Typography>
              <Typography paragraph>
                My journey in web development started several years ago, and I've been continuously learning
                and improving my skills since then. I enjoy solving complex problems and turning ideas into
                reality through code.
              </Typography>
              <Typography paragraph>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or enjoying outdoor activities.
              </Typography>
            </Box>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Paper elevation={3} sx={{ p: 4, height: '100%', display: 'flex', alignItems: 'center' }}>
              <Box sx={{ textAlign: 'center', width: '100%' }}>
                <Avatar
                  sx={{ 
                    width: 150, 
                    height: 150, 
                    mx: 'auto', 
                    mb: 4,
                    bgcolor: 'primary.main'
                  }}
                >
                  A
                </Avatar>
                <Typography variant="body1" gutterBottom>
                  "I believe in creating websites that not only look great but also provide
                  an exceptional user experience."
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>

      <Box sx={{ mt: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
            My Skills
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} md={4} key={skill.name}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Paper elevation={2} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {skill.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {skill.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
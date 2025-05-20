import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Box } from '@mui/material';

// Layout component will be imported once created

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h1" component="h1" gutterBottom>
            Abdo Alatrash
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom color="text.secondary">
            Web Developer & Designer
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Typography variant="body1" paragraph sx={{ maxWidth: '800px', mt: 4 }}>
            Welcome to my personal portfolio! I'm passionate about creating 
            beautiful, functional websites and applications.
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home;
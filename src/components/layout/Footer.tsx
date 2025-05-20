import React from 'react';
import { Box, Container, Typography, Link, Grid as MuiGrid, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

// Fix for the Grid component with newer MUI versions
const Grid = MuiGrid as any;

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[900],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Abdo Alatrash
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Web Developer & Designer creating beautiful, functional websites and applications.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
              Home
            </Link>
            <Link href="/projects" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
              Projects
            </Link>
            <Link href="/about" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
              About
            </Link>
            <Link href="/contact" color="text.secondary" sx={{ display: 'block' }}>
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Connect
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="github" sx={{ mr: 1 }}>
                <GitHubIcon />
              </IconButton>
              <IconButton aria-label="linkedin" sx={{ mr: 1 }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="twitter">
                <TwitterIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Email: abdo@alatrash.me
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' Abdo Alatrash. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
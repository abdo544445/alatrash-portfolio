import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Typography, 
  Container, 
  Box, 
  TextField, 
  Button, 
  Grid, 
  Paper,
  Snackbar,
  Alert
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [open, setOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setOpen(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const contactInfo = [
    { icon: <EmailIcon fontSize="large" />, title: 'Email', info: 'abdo@alatrash.me' },
    { icon: <LocationOnIcon fontSize="large" />, title: 'Location', info: 'New York, USA' },
    { icon: <PhoneIcon fontSize="large" />, title: 'Phone', info: '+1 (123) 456-7890' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          Contact Me
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Get In Touch
              </Typography>
              <Typography paragraph color="text.secondary">
                Have a question or want to work together? Fill out the form and I'll get back to you as soon as possible.
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  variant="outlined"
                  margin="normal"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Grid container spacing={3}>
              {contactInfo.map((item, index) => (
                <Grid item xs={12} key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <Paper elevation={2} sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ color: 'primary.main', mr: 2 }}>
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography variant="h6" component="h3">
                            {item.title}
                          </Typography>
                          <Typography variant="body1">
                            {item.info}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
              
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Paper elevation={2} sx={{ p: 3, mt: 2 }}>
                    <Typography variant="h6" component="h3" gutterBottom>
                      Connect With Me
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                      {/* Social media icons would go here */}
                      <Button variant="contained" color="primary">
                        LinkedIn
                      </Button>
                      <Button variant="contained" color="primary">
                        GitHub
                      </Button>
                      <Button variant="contained" color="primary">
                        Twitter
                      </Button>
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
      
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Your message has been sent! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
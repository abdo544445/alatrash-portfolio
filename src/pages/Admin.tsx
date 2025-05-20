import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Typography,
  Container,
  Box,
  Button,
  TextField,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  SelectChangeEvent
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

// Sample project data - in a real app this would come from Firebase
const initialProjects = [
  {
    id: '1',
    title: 'E-Commerce Website',
    description: 'A full-stack e-commerce platform with user authentication and payment processing.',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects and skills.',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['React', 'TypeScript', 'Material-UI']
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'A productivity app to help users manage their tasks and projects.',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['React', 'Firebase', 'Redux']
  }
];

const techOptions = [
  'React', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 
  'MongoDB', 'Firebase', 'Redux', 'Material-UI', 'CSS', 'HTML',
  'Python', 'Django', 'SQL', 'Docker', 'AWS'
];

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const Admin: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project>({
    id: '',
    title: '',
    description: '',
    image: '',
    technologies: []
  });

  // In a real application, you would fetch data from Firebase
  useEffect(() => {
    // fetchProjects();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    resetForm();
  };

  const resetForm = () => {
    setCurrentProject({
      id: '',
      title: '',
      description: '',
      image: '',
      technologies: []
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentProject(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTechChange = (event: SelectChangeEvent<string[]>) => {
    const { value } = event.target;
    setCurrentProject(prev => ({
      ...prev,
      technologies: typeof value === 'string' ? value.split(',') : value,
    }));
  };

  const handleEditProject = (project: Project) => {
    setCurrentProject(project);
    setIsEditing(true);
    setOpen(true);
  };

  const handleDeleteProject = (id: string) => {
    setProjects(prev => prev.filter(project => project.id !== id));
    // In a real app, you would also delete from Firebase
  };

  const handleSaveProject = () => {
    if (isEditing) {
      // Update existing project
      setProjects(prev => 
        prev.map(project => 
          project.id === currentProject.id ? currentProject : project
        )
      );
    } else {
      // Add new project
      const newProject = {
        ...currentProject,
        id: Date.now().toString(), // Simple unique ID generation
      };
      setProjects(prev => [...prev, newProject]);
    }
    // In a real app, you would save to Firebase
    handleClose();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h2" component="h1">
            Admin Dashboard
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleClickOpen}
          >
            Add Project
          </Button>
        </Box>
      </motion.div>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Manage Projects
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Technologies</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>{project.title}</TableCell>
                  <TableCell>{project.description.substring(0, 100)}...</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {project.technologies.map((tech) => (
                        <Chip key={tech} label={tech} size="small" />
                      ))}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEditProject(project)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteProject(project.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Add/Edit Project Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{isEditing ? 'Edit Project' : 'Add New Project'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                name="title"
                label="Project Title"
                fullWidth
                value={currentProject.title}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="description"
                label="Project Description"
                fullWidth
                multiline
                rows={4}
                value={currentProject.description}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="image"
                label="Image URL"
                fullWidth
                value={currentProject.image}
                onChange={handleInputChange}
                required
                helperText="Enter a URL for the project image"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="technologies-label">Technologies</InputLabel>
                <Select
                  labelId="technologies-label"
                  id="technologies"
                  multiple
                  value={currentProject.technologies}
                  onChange={handleTechChange}
                  input={<OutlinedInput label="Technologies" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {techOptions.map((tech) => (
                    <MenuItem key={tech} value={tech}>
                      {tech}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button 
            onClick={handleSaveProject} 
            color="primary" 
            variant="contained"
            startIcon={<SaveIcon />}
            disabled={!currentProject.title || !currentProject.description || !currentProject.image}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Admin;
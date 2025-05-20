import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Layout from './components/layout/Layout';

// Import pages when created
const Home = React.lazy(() => import('./pages/Home'));
const Projects = React.lazy(() => import('./pages/Projects'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Admin = React.lazy(() => import('./pages/Admin'));

// Create theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5e35b1',
    },
    secondary: {
      main: '#00e5ff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Layout>
        </React.Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;

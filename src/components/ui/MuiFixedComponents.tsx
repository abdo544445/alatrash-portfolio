import { 
  Grid as MuiGrid,
  ListItem as MuiListItem,
  Container as MuiContainer,
  Paper as MuiPaper,
  Card as MuiCard
} from '@mui/material';

// Fix for Material UI v7 component typing issues
export const Grid = MuiGrid as any;
export const ListItem = MuiListItem as any;
export const Container = MuiContainer as any;
export const Paper = MuiPaper as any;
export const Card = MuiCard as any;
import * as React from 'react';
import styles from './Card.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ChartsPage from "../BarChart/BarChart";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 545, maxHeight: 500 }}>
      <CardActionArea>
  <ChartsPage />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
  
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

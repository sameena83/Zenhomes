import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardLaws() {
  return (
    <Card sx={{ maxWidth: 345, margin: "20px"}}>
      <CardMedia
        component="img"
        alt="Statistics"
        height="140"
        image="https://img.freepik.com/free-vector/justice-scales-wooden-judge-gavel-concept-law-hammer-sign-with-books-laws-legal-law-auction-symbol-classic-court-libra-flat-vector-illustration_119217-1313.jpg?w=1060"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Laws For tenants
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here you can check out the most important and useful laws to be aware of as a tenant 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "black", background: "#0077ff", }}>Click here to get familiar with the renting laws</Button>
      </CardActions>
    </Card>
  );
}
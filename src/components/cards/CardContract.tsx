import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardContract() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Rental Agreement"
        height="140"
        image="https://morgenbird.com/wp-content/uploads/Rental-contracts.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rental Agreements
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here you can check out your rental agreement, old agreements and create a new Contract 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" >Click here to contact a Lawyer</Button>
        <Button size="small" >Click here to see all contracts</Button>
      </CardActions>
    </Card>
  );
}
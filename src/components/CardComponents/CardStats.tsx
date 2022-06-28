import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardStats() {
  return (
    <Card sx={{ maxWidth: 345, margin: "20px" }}>
      <CardMedia
        component="img"
        alt="Statistics"
        height="140"
        image="https://images.theconversation.com/files/236859/original/file-20180918-158240-1jd9gm6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Monthly Expenses
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here you can check out the monthly variable expenses such as Heating, Electricity and Water usage. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "black", background: "#0077ff", }}>Click here to see your monthly expenses</Button>
      </CardActions>
    </Card>
  );
}
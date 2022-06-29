import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function CardEvents() {
  const history = useNavigate();
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="Statistics"
        height="140"
        image="https://orationspeakers.com/wp-content/uploads/2022/01/Upcoming-events.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Stay Tuned for upcoming events
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here you can check out for exciting events
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>history("/event")} >Click here to go to events</Button>
      </CardActions>
    </Card>
  );
}
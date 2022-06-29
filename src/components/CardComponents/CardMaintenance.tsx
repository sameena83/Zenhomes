import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function CardMaintenance() {
  const history = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, margin: "20px"}}>
      <CardMedia
        component="img"
        alt="Upload"
        height="140"
        image="https://img.freepik.com/free-vector/image-upload-concept-illustration_23-2148276162.jpg?w=1060"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Upload pictures 
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Upload your pictures of areas in your apartment that is either bad maintained or needs fixing
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>history("/pictures")} size="small" sx={{ color: "black", background: "#0077ff", }}>Click here to upload images</Button>
      </CardActions>
    </Card>
  );
}
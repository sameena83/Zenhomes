import { Grid, Paper, Box, Typography } from "@mui/material";
import {CardDataI} from "./TenancyGrid"
import { motion } from "framer-motion"

interface Props {
    card:CardDataI
}

function TenancyCard({card}:Props) {
  return (
    
      <Grid item xs={6} component={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <Paper elevation={2} sx={{padding:2}}> 
          <Typography style={{position:"relative", left:5, fontWeight:600}}
           variant="h4" component="p">
               {card.title}
          </Typography >
          <Box sx={{display:"flex", alignItems:"center", height:150, width:"100%"}}>
              <Box sx={{flex:1, width:50, wordWrap:"break-word"}}>
                  <Typography component="p"> {card.description} </Typography>
              </Box>
              <Box sx={{flex:1}}>
                  <img src={card.image} alt="" style={{height:"100%", width:"100%", backgroundImage:`url("images/chart.png")`}}/>
              </Box>
          </Box>
        </Paper>
      </Grid>
    
  );
}

export default TenancyCard;

import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import award from '../award.png';
 
function Content() {
   
   return (
      <Grid container >
         <Grid item xs={12}>
            <Typography variant="h3">About me</Typography>
         </Grid>
         <Grid item xs={12} sx={{margin:"20px 0px"}}>
            <Typography> 
               It is a long established fact that a reader will be distracted by the
               readable content.
            </Typography>
         </Grid>
         <Grid item xs={12}  >
            <Typography sx={{fontWeight: "300",fontFamily: "Roboto"}}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
               minim veniam, quis nostrud exercitation ullamco laboris nisi ut
               aliquip ex ea commodo consequat duis aute irure dolor in reprehende
            </Typography>
         </Grid>
         <Grid item xs={12} sx={{marginTop:"50px"}} >
            <Grid container  alignItems="center" justifyContent="space-between">
               <Grid item xs={4} alignItems="center">
                  <CardMedia
                     component="img"
                     src={award}
                     alt="award"
                     sx={{width: "120px",height: "120px",borderRadius: "20px",}}
                  />
               </Grid>
               <Grid item xs={8}>
                  <Typography sx={{fontWeight: "bold",color: "#555",marginBottom: "10px",}}>
                     International Design Awards 2021
                  </Typography>
                  <Typography sx={{fontWeight: "300"}}>
                     Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                     and fugit.
                  </Typography>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
     
   );
}

export default Content;

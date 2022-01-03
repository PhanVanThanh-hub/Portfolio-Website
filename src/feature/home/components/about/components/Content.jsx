import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
 
function Content(props) {
   
   return (
      <Grid container    >
         <Grid item xs={12}>
            <Typography variant="h3">About me</Typography>
         </Grid>
         <Grid item xs={12} sx={{margin:"20px 0px"}}>
            <Typography> 
               {props.about}
            </Typography>
         </Grid>
      </Grid>
     
   );
}

export default Content;

import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
 
 
export default function ContactChild(props) {

  
   return (
      <> 
         <Grid item xs={12}>
            <Grid container>
               <Grid item>
                  <Typography>{props.icon}</Typography>
               </Grid>
               <Grid item sx={{paddingLeft:"30px"}}>
                  <Typography>{props.detail}</Typography>
               </Grid>
            </Grid>
         </Grid>
         <Grid item xs={12}>
            <Divider sx={{borderColor:"#26211e"}}/>
         </Grid>
      </>
    
   );
}

 

import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
 
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
export default function AboutMe() {
   return (
      <Grid container spacing={2} sx={{color:"white"}}>
         <Grid item xs={12} sx={{display:"flex",}}>
            <Avatar sx={{justifyContent:"center", bgcolor: deepOrange[500] ,width: "200px",height: "200px", border: '5px solid lightgray'}}>N</Avatar>
         </Grid>
         <Grid item xs={12}>
            <Typography sx={{fontWeight:"bold",letterSpacing:"0.08em",fontSize:"1.5em"}}>ABOUT ME</Typography>
         </Grid>
         <Grid item xs={12}>
            <Divider sx={{borderColor:"#26211e"}}/>
         </Grid>
         <Grid item xs={12}>
            <Typography sx={{fontSize:"0.9em"}}>
               Lorem ipsum dolor sit amet. consectetur adipisicing elit Non
               vel sint nii possimun unt vertatis etam velt Lorem ipum
               delor sit amet.consectetur adipisicing elin.
            </Typography>
         </Grid>
      </Grid>
   );
}

 

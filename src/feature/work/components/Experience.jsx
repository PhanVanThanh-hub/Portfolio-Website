import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
export default function Experience() {
   return (
      <Grid container spacing={2} sx={{color:"white"}}>
         <Grid item xs={12}>
            <Typography sx={{fontWeight:"bold",letterSpacing:"0.08em",fontSize:"1.5em"}}>EXPERIENCE</Typography>
         </Grid>
         <Grid item xs={12}>
            <Divider sx={{borderColor:"#26211e"}}/>
         </Grid>
         <Grid item xs={12}>
            <Typography sx={{fontWeight:"bold"}}>SENIOR UX DESICNER at Yellow inc.</Typography>
            <Typography sx={{padding:"10px 0px",    fontFamily: "emoji"}}>
               Jan 2017- Present
            </Typography>
            <Typography sx={{fontSize:"0.9em"}}>
               Lorem ipsum dolor sit amet. consectetur adipisicing elit Non
               vel sint nii possimun unt vertatis etam velt Lorem ipum
               delor sit amet.consectetur adipisicing elin.
            </Typography>
         </Grid>
         <Grid item xs={12}>
            <Typography sx={{fontWeight:"bold"}}>SENIOR UX DESICNER at Yellow inc.</Typography>
            <Typography sx={{padding:"10px 0px",    fontFamily: "emoji"}}>
               Jan 2017- Present
            </Typography>
            <Typography sx={{fontSize:"0.9em"}}>
               Lorem ipsum dolor sit amet. consectetur adipisicing elit Non
               vel sint nii possimun unt vertatis etam velt Lorem ipum
               delor sit amet.consectetur adipisicing elin.
            </Typography>
         </Grid>
      </Grid>
   );
}

 

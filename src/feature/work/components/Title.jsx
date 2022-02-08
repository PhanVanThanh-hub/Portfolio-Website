import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
export default function Title() {
   return (
      <Grid container   sx={{color:"white"}}>
         <Grid item xs={12} sx={{ }}>
            <Typography sx={{fontSize:"4em",'@media ( max-width: 480px)':{
            textAlign:"center"
         },}}>Phan Văn Thanh</Typography>
         </Grid>
         <Grid item xs={12}>
            <Grid container>
               <Grid item>
                  <Typography> <StarIcon sx={{width:"1.5em",height:"1.5em"}}/></Typography>
               </Grid>
               <Grid item>
                  <Typography> <StarIcon sx={{width:"1.5em",height:"1.5em"}}/></Typography>
               </Grid>
               <Grid item>
                  <Typography> <StarIcon sx={{width:"1.5em",height:"1.5em"}}/></Typography>
               </Grid>
               <Grid item>
                  <Typography> <StarIcon sx={{width:"1.5em",height:"1.5em"}}/></Typography>
               </Grid>
               <Grid item>
                  <Typography> <StarIcon sx={{width:"1.5em",height:"1.5em"}}/></Typography>
               </Grid>
               <Grid item sx={{paddingLeft:"10px"}}>
                  <Typography sx={{fontFamily: "cursive",fontSize:"1.5em" }}>  Developer</Typography>
               </Grid>
            </Grid>
           
         </Grid>
      </Grid>
   );
}

 

import React from 'react';
import Grid from '@mui/material/Grid';
 
import { makeStyles } from '@mui/styles';
import Image from '../components/Image'; 
import Information from '../components/Information';
const useStyles = makeStyles({
 
   root:{
      padding:"50px",
 
   },
    
 });

function PageIntro() {
   const classes = useStyles()
   return (
      <div>
         <Grid container  spacing={0} direction="row" alignItems="center" justifyContent="center" sx={{height:"100vh"}}>
            <Grid item xs={6}   className={classes.root}>
               <Information/>
            </Grid>
            <Grid item xs={6}>
               <Image/>
            </Grid>
         </Grid>
      </div>
   );
}

export default PageIntro;

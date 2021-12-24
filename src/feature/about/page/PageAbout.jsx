import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Image from '../components/image';
import Content from '../components/content';
 
const useStyles = makeStyles({
 
   root:{
      padding:"50px",
      position:"relative",
      height:"100%"
   },
   cardImage:{
      height:"70vh",
      position:"relative",
   }
    
 });
function PageAbout() {
   const classes = useStyles()
   return (
      <div style={{padding:"16px"}}>
         <Grid container  spacing={1} direction="row" alignItems="center" justifyContent="center" sx={{height:"100vh"}}>
            <Grid item xs={6}   className={classes.root}>
               <Image/>
            </Grid>
            <Grid item xs={6}>
               <Content/>
            </Grid>
         </Grid>
      </div>
   );
}

export default PageAbout;

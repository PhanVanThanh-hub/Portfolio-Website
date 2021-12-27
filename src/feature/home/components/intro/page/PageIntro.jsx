import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Image from '../components/Image'; 
import Information from '../components/Information';
import useWindowPosition from '../../../../../hook/useWindowPosition';
 
import {
   useMediaQuery,
 } from "@mui/material";
const useStyles = makeStyles({
   wrapper:{
      flexDirection: "row",
      height:"100vh",
      '@media (max-width: 480px)': {
         flexDirection: "column"
      }
   },
   root:{
      padding:"50px",
 
   },
    
 });

function PageIntro() {
   const classes = useStyles()
   let checked = useWindowPosition('header');
   const largeScreen = useMediaQuery('(min-width:480px)');
   if(largeScreen===false){
      checked=true
   }
   return (
      <div>
         <Grid container  spacing={0}  direction={largeScreen?"row":"column"} 
               sx={{height:"100vh",
                  '@media ( max-width: 480px)':{
                      height:"100%"
                  }}} 
         alignItems="center" justifyContent="center" 
         >
            <Grid item xs={6}   className={classes.root}>
                  
               <Information checked={checked}/>
                
            </Grid>
            <Grid item xs={6}>
                  
               <Image checked={checked}/>
             
            </Grid>
             
         </Grid>
      </div>
   );
}

export default PageIntro;

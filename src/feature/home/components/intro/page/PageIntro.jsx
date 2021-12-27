import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Image from '../components/Image'; 
import Information from '../components/Information';
import { Collapse } from '@mui/material';
import useWindowPosition from '../../../../../hook/useWindowPosition';
const useStyles = makeStyles({
 
   root:{
      padding:"50px",
 
   },
    
 });

function PageIntro() {
   const classes = useStyles()
   const checked = useWindowPosition('header');
   return (
      <div>
         <Grid container  spacing={0} direction="row" alignItems="center" justifyContent="center" sx={{height:"100vh"}}>
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

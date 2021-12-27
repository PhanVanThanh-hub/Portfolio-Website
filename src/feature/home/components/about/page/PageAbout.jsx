import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Image from '../components/Image';
import Content from '../components/Content';
import useWindowPosition from '../../../../../hook/useWindowPosition';
import { Collapse } from '@mui/material';
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
   const checked = useWindowPosition('information');
   return (
      <div style={{padding:"16px",height:"100vh"}}>
         <Grid container  spacing={1} direction="row" alignItems="center" justifyContent="center">
            <Grid item xs={6}   className={classes.root}>
               <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}> 
                  <Image/>
               </Collapse>
            </Grid>
            <Grid item xs={6}>
               <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}> 
                  <Content/>
               </Collapse>
            </Grid>
         </Grid>
      </div>
   );
}

export default PageAbout;

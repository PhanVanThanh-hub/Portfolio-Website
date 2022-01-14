import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import { Collapse } from '@mui/material';
import { 
   useMediaQuery,
 } from "@mui/material";
import Title from '../components/Title';
import Content from '../components/Content';
const useStyles = makeStyles(() => ({
   
}))
function PageFAQ() {
   const  classes=useStyles()
   
   return (
      <Box sx={{height:"100%",padding:"0px 50px"}}>
         <Grid container direction="row" justifyContent="center" alignItems="center" sx={{height:"100%",borderRadius:"12px",overflow:"hidden" }}>
            <Grid item xs={6} sx={{height:"100%"}}>
               <Title/>
            </Grid>
            <Grid item xs={6} sx={{height:"100%"}}>
               <Content/>
            </Grid>
         </Grid>
      </Box>
       
   );
}

export default PageFAQ;

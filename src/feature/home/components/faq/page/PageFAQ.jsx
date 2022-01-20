import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Title from '../components/Title';
import Content from '../components/Content';
 
function PageFAQ() {
   
   return (
      <Box sx={{height:"100%"}}>
         <Grid container direction="row" justifyContent="center" alignItems="center" sx={{height:"100%",overflow:"hidden" }}>
            <Grid item xs={6} sx={{height:"100%"}}>
               <Title/>
            </Grid>
            <Grid item xs={6} sx={{height:"100%"}}>
               <Content />
            </Grid>
         </Grid>
      </Box>
       
   );
}

export default PageFAQ;

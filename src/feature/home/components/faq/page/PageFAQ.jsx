import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Title from '../components/Title';
import Content from '../components/Content';
import { useMediaQuery,} from "@mui/material";
function PageFAQ() {
   const largeScreen = useMediaQuery('(min-width:480px)');
   const largeScreen1 = useMediaQuery('(min-width:900px)');
   return (
      <Box sx={{height:"100%"}}>
         <Grid container direction={largeScreen?"row":"column"} justifyContent="center" alignItems="center" sx={{height:"100%",overflow:"hidden" }}>
            {/* {
               !largeScreen?
                  <></>
               :
               <Grid item xs={6} sx={{height:"100%"}}>
                     <Title/>
                  </Grid>
            } */}
            {
               !largeScreen1?
                  <></>
               :
               <Grid item xs={6} sx={{height:"100%"}}>
                     <Title/>
                  </Grid>
            }
             
            <Grid item xs={!largeScreen1? 12 : 6} sx={{height:"100%"}}>
               <Content />
            </Grid>
         </Grid>
      </Box>
       
   );
}

export default PageFAQ;

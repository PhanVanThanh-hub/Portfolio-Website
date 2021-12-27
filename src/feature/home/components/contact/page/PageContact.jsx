import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InformationContact from '../components/InforContact';
import FormContact from '../components/FormContact';
import useWindowPosition from '../../../../../hook/useWindowPosition';
import { Collapse } from '@mui/material';
import { 
   useMediaQuery,
 } from "@mui/material";
function PageContact() {
   let checked = useWindowPosition('product');
   const largeScreen = useMediaQuery('(min-width:480px)');
   if(largeScreen===false){
      checked=true
   }
   return (
      <Box sx={{height: "100vh",position: "relative",'@media ( max-width: 480px)':{
         height:"100%",
         padding: "0px 50px"
   }}}>
          
             
            {largeScreen?
               <div style={{ width: "20px",height: "100%",backgroundColor: "#59b256",position: "absolute",
                     '@media ( max-width: 480px)':{
                     display:"none"
                     }}}>
               </div>
               :
               <></>
            }
            <Grid container  spacing={2} justifyContent="center" direction={largeScreen?"row":"column"}
               alignItems="center" sx={{ padding:"50px",'@media ( max-width: 480px)':{
                  padding:"0px"
                  }}}>
               <Grid item xs={5}  >
                  <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}> 
                     <InformationContact/>
                  </Collapse>
               </Grid>
               <Grid item xs={7}>
                  <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}> 
                     <FormContact/>
                  </Collapse>
               </Grid>
            </Grid>
        
      </Box>
       
   );
}

export default PageContact;

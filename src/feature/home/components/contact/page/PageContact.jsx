import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InformationContact from '../components/InforContact';
import FormContact from '../components/FormContact';
import useWindowPosition from '../../../../../hook/useWindowPosition';
import { Collapse } from '@mui/material';
function PageContact() {
   const checked = useWindowPosition('product');
   return (
      <Box sx={{height: "100vh",position: "relative",}}>
         <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}> 
            <div style={{ width: "20px",height: "100%",backgroundColor: "#59b256",position: "absolute",}}>
            
            </div>
            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{height:"100%",padding:"50px"}}>
               <Grid item xs={5}  >
                  <InformationContact/>
               </Grid>
               <Grid item xs={7}>
                  <FormContact/>
               </Grid>
            </Grid>
         </Collapse>
      </Box>
       
   );
}

export default PageContact;

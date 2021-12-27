import React from 'react';
 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../components/Product';
import datas from '../components/data'; 
import Title from '../components/Title';
import useWindowPosition from '../../../../../hook/useWindowPosition';
import { Collapse } from '@mui/material';
function PageProductList() {
    
   const checked = useWindowPosition('about');
   return (
      <Box sx={{padding: "50px 100px",height:"100vh",display: "flex",flexDirection: "column",alignItems: "center",}}>
         <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}> 
            <Title/>
            <Grid container>
               {datas.map((data)=>
                  <Grid item xs={4} >
                     <Product  product = {data}/>
                  </Grid>
               )}
                  
               
            </Grid>
         </Collapse>
      </Box>
   );
}

export default PageProductList;
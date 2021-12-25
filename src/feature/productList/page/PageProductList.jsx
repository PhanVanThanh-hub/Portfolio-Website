import React from 'react';
 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../components/Product';
import datas from '../components/data'; 
import Title from '../components/Title';
function PageProductList() {
    
   return (
      <Box sx={{padding: "50px 100px",display: "flex",flexDirection: "column",alignItems: "center"}}>
         <Title/>
         <Grid container>
            {datas.map((data)=>
               <Grid item xs={4}>
                  <Product  product = {data}/>
               </Grid>
            )}
                
             
         </Grid>
      </Box>
   );
}

export default PageProductList;
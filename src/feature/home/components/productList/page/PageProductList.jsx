import React from 'react';
 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../components/Product';
import Title from '../components/Title';
import useWindowPosition from '../../../../../hook/useWindowPosition';
import {
    
   useMediaQuery,
 } from "@mui/material";
function PageProductList(props) {
   const largeScreen = useMediaQuery('(min-width:480px)');
   let checked = useWindowPosition('about');
   if(largeScreen===false){
      checked=true
   }
   return (
      <Box sx={{padding: "50px 100px",height:"100vh",display: "flex",flexDirection: "column",alignItems: "center",
               '@media ( max-width: 480px)':{
                     height:"100%",
                     padding:"10px",
               }}}>
          
            <Title/>
          
            <Grid container direction={largeScreen?"row":"column"}>
               {props.products.map((product,index)=>
                  <Grid item xs={4} sx={{'@media ( max-width: 480px)':{
                     marginTop:"10px"
                     }}} 
                     key={index}
                  >
                     <Product  product = {product} checked={checked}/>
                  </Grid>
               )}
                  
               
            </Grid>
        
      </Box>
   );
}

export default PageProductList;
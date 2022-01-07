import React from 'react';
 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../components/Product';
import Title from '../components/Title';
import useWindowPosition from '../../../../../hook/useWindowPosition';
import { Collapse } from '@mui/material';
import {
    
   useMediaQuery,
 } from "@mui/material";
 import Slider from "react-slick";
function PageProductList(props) {
   const largeScreen = useMediaQuery('(min-width:480px)');
   let checked = useWindowPosition('about');
   if(largeScreen===false){
      checked=true
   }
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
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
                        <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}> 
                           <Product  product = {product} checked={checked}/>
                        </Collapse>
                     </Grid>
                  )}
             
               
            </Grid>
        
      </Box>
   );
}

export default PageProductList;
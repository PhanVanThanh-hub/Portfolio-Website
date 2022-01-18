import React from 'react';
 
import Box from '@mui/material/Box';
import Product from '../components/Product';
import Title from '../components/Title';
import useWindowPosition from '../../../../../hook/useWindowPosition';
import { Collapse } from '@mui/material';
import {
    
   useMediaQuery,
 } from "@mui/material";
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleArrow(props) {
   const { className, style, onClick } = props;
   return (
     <div
       className={className}
       style={{ ...style, display: "block", background: "#9e9e9e" ,    borderRadius: "50%"}}
       onClick={onClick}
     />
   );
 }
function PageProductList(props) {
   
   const largeScreen = useMediaQuery('(min-width:480px)');
   let checked = useWindowPosition('about');
   if(largeScreen===false){
      checked=true
   }
   const settings = {
      className: "slider variable-width",
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      nextArrow:<SampleArrow />,
      prevArrow: <SampleArrow />
   };
   return (
      <Box sx={{padding: "50px 100px",height:"100%",  
               '@media ( max-width: 480px)':{
                     height:"100%",
                     padding:"10px",
               }}}>
            <div style={{display:"flex",flexDirection: "column",alignItems: "center",}}>
               <Title/>
            </div>
            <Slider {...settings} style={{padding:"20px", background:"linear-gradient(90deg,#755bea, #ff72c0)",borderRadius:"12px"}}>
               {props.products.map((product,index)=>
                  <Product key={index} product = {product} checked={true}/>
                     
               )}
            </Slider>
      </Box>
   );
}

export default PageProductList;
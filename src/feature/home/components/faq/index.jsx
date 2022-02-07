import React from 'react';
import Box from "@mui/material/Box";
import PageFAQ from './page/PageFAQ';
function FAQ() {
   return (
      <Box id="faq" sx={{height:"100vh" ,'@media ( max-width: 1024px)':{
         height:"100%"

   },}} >
         <PageFAQ/>
      </Box>
   );
}

export default FAQ;

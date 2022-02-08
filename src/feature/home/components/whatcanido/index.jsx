import React from 'react';
import PageIDo from './page/PageIDo';
import Box from "@mui/material/Box";
function IDo() {
   return (
      <Box id="ido" 
         sx={{height:"100vh",
            '@media ( max-width: 1024px)':{
               height:"100%"
            },
      }} >
         <PageIDo/>
      </Box>
   );
}

export default IDo;

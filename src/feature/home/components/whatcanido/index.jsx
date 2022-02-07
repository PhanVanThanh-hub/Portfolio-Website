import React from 'react';
import PageIDo from './page/PageIDo';
import Box from "@mui/material/Box";
import { useMediaQuery,} from "@mui/material";
function IDo() {
   const largeScreen = useMediaQuery('(min-width:480px)');
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

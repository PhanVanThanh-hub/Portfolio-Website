import React from 'react';
import PageWork from './page/PageWork'; 
import image from '../../static/image/cv/background.jpg'
import Box from '@mui/material/Box';
function CV() {
   return (
      <Box sx={{height:"100%",padding:"60px 200px",backgroundImage:`url(${image})`,
            '@media ( max-width: 1024px)':{
               padding:"0px"
            },
      }}
      >
         <PageWork/>
      </Box>
   );
}

export default CV;

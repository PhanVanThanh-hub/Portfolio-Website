 
import HomePage from './page/PageHome';
import React from 'react';
import Box from "@mui/material/Box";

function Home() {
   return (
      <div style={{marginTop:"30px"}}  >
         <Box  sx={{   bgcolor: 'background.default', color: 'text.primary', }}>
            <HomePage/>
         
         </Box>
         
      </div>
   );
}

export default Home;

 
import HomePage from './page/PageHome';
import React from 'react';
import Box from "@mui/material/Box";

function Home() {
   return (
      <div  >
         <Box  sx={{   bgcolor: 'background.primary', color: 'text.primary', }}>
            <HomePage/>
         
         </Box>
         
      </div>
   );
}

export default Home;

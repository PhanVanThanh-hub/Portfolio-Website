import React from 'react';
import PageIntro from './page/PageIntro';
import Box from "@mui/material/Box";
function Intro() {
   return (
      <Box id="information" sx={{bgcolor: 'background.default'}}  >
         <PageIntro/>
      </Box>
   );
}

export default Intro;

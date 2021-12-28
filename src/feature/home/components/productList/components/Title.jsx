import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Title() {
   return (

      <Grid container sx={{width:"65%",textAlign: "center",'@media ( max-width: 480px)':{
                        width:"100%",
                        
                  }}}  >
         <Grid item xs={12}>
            <Typography sx={{fontSize:"50px",fontWeight: "600",}}>
               Some projects I've done
            </Typography>
         </Grid>
         <Grid item xs={12} sx={{ margin:"20px 0px",'@media ( max-width: 480px)':{
                     display:"none"
               }}}>
            <Typography>
               I used the knowledge that I learned on my own to complete them
            </Typography>
         </Grid>
      </Grid>
   );
}

export default Title;
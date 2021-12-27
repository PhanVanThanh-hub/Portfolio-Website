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
               Create & inspire. It's Lama
            </Typography>
         </Grid>
         <Grid item xs={12} sx={{ margin:"20px 0px",'@media ( max-width: 480px)':{
                     display:"none"
               }}}>
            <Typography>
                  Lama is a creative portfolio that your work has been waiting for.
                  Beautiful homes, stunning portfolio styles & a whole lot more awaits
                  inside.
            </Typography>
         </Grid>
      </Grid>
   );
}

export default Title;
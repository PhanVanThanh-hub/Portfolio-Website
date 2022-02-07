import React from 'react';
import Grid from '@mui/material/Grid';
 
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
 
const useStyles = makeStyles(() => ({
   box:{
    
     
   }
}))
function Title() {
   const  classes=useStyles()
   
   return (
     
         <Grid container    direction="column"   
            sx={{ textAlign:"center" ,paddingTop:"100px",color:"rgb(55, 102, 244)",
                  '@media ( max-width: 900px)':{
                     paddingTop:"0px"
            
               },
            }}
         >
            <Grid item  >
               <Typography sx={{fontSize: "5rem",fontFamily: "ui-monospace",fontWeight: "bolder",}}>
                  FAQ 
               </Typography>
            </Grid>
            <Grid item  >
               <Typography sx={{fontSize: "2rem",fontFamily: "ui-monospace",fontWeight: "bolder",}}>
                  Common react questions that i can answer
               </Typography>
            </Grid>
         </Grid>
     
   );
}

export default Title;

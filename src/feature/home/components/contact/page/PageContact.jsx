import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InformationContact from '../components/InforContact';
import FormContact from '../components/FormContact';
import useWindowPosition from '../../../../../hook/useWindowPosition';
import { makeStyles } from '@mui/styles';
import { Collapse } from '@mui/material';
import { 
   useMediaQuery,
 } from "@mui/material";
import Paper from '@mui/material/Paper';
const useStyles = makeStyles(() => ({
   paper:{
      overflow:"hidden",
      '&::after':{
         content: '""',
         position: "absolute",
         top: "0",
         left: "0",
         width: "50%",
         height: "50%",
         background: "linear-gradient(#2196f3,#e91e63)",
         clipPath: "circle(20% at 10% 10%)",
      },
      '&::before':{
         content: '""',
         position: "absolute",
         top: "0",
         left: "0",
         width: "100%",
         height: "100%",
         background: "linear-gradient(#fff,#f0f)",
         clipPath: "circle(10% at right 100%)",
      },
   }
}))
function PageContact() {
   const  classes=useStyles()
   let checked = useWindowPosition('product');
   const largeScreen = useMediaQuery('(min-width:480px)');
   if(largeScreen===false){
      checked=true
   }
   return (
      <Box  sx={{ height: "100vh",position: "relative",display:"flex", justifyContent:"center",padding:"50px",'@media ( max-width: 480px)':{
         height:"100%",
         padding: "0px 50px"
      }}}> 
             
          
            {largeScreen?
               <Paper elevation={3} className={classes.paper} sx={{bgcolor: 'background.default',borderRadius:"20px",padding:"50px 100px",position:"relative"}}> 
               <div style={{ top: "5%",left: "35%",marginTop:"-50px",marginLeft:"-50px", zIndex:"1",position: "absolute",}}>
                  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                     <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                           <stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop>
                           <stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop>
                        </linearGradient>
                     </defs>
                     <path fill="url(#gradient)">
                        <animate attributeName='d'
                           dur="10000ms"
                           repeatCount="indefinite"
                           values="M422,314.5Q353,379,281,405Q209,431,127,390Q45,349,78.5,266.5Q112,184,160,125Q208,66,280.5,93Q353,120,422,185Q491,250,422,314.5Z;
                           M415,343Q398,436,299,452.5Q200,469,118.5,410.5Q37,352,59,260.5Q81,169,146,123Q211,77,301,75Q391,73,411.5,161.5Q432,250,415,343Z;
                           M416.5,327Q373,404,289.5,423.5Q206,443,146.5,385.5Q87,328,88,250Q89,172,147.5,113.5Q206,55,286.5,79Q367,103,413.5,176.5Q460,250,416.5,327Z;
                           M415.99996,336.00079Q387.00123,422.00158,299.00083,420.49974Q211.00044,418.99789,120.99776,387.00013Q30.99508,355.00237,29.9949,248.99991Q28.99473,142.99745,118.9975,106.49938Q209.00026,70.00132,302.50141,68.49908Q396.00255,66.99684,420.50062,158.49842Q444.99868,250,415.99996,336.00079Z;
                           M430.50127,345.00079Q401.00123,440.00158,300.50013,453.5029Q199.99903,467.00422,131.00088,403.50145Q62.00272,339.99868,85.50488,261.00105Q109.00703,182.00343,152.0029,95.49903Q194.99877,8.99464,286.99864,48.49824Q378.99851,88.00185,419.49991,169.00092Q460.00132,250,430.50127,345.00079Z;
                           M422,314.5Q353,379,281,405Q209,431,127,390Q45,349,78.5,266.5Q112,184,160,125Q208,66,280.5,93Q353,120,422,185Q491,250,422,314.5Z"
                        >

                        </animate>
                     </path>
                  </svg>
               </div>
                  <Grid container  justifyContent="center" direction="row"alignItems="center" sx={{ padding:"50px"}}>
                     <Grid item xs={6}  >
                        <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}> 
                           <InformationContact/>
                        </Collapse>
                     </Grid>
                     <Grid item xs={6} sx={{display:"flex",justifyContent: "center"}}>
                     
                           <FormContact/>
                     
                     </Grid>
                  </Grid>
               </Paper>
               :
               <Grid container  justifyContent="center"  alignItems="center" >
                  <Grid item xs={12}  >
                     <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}> 
                        <InformationContact/>
                     </Collapse>
                  </Grid>
                  <Grid item xs={12} sx={{display:"flex",justifyContent: "center"}}>
                  
                        <FormContact/>
                  
                  </Grid>
               </Grid>
            }
             
             
          
          
      </Box>
       
   );
}

export default PageContact;

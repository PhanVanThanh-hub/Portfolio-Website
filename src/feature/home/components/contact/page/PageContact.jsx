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
      <Box sx={{height: "100vh",position: "relative",display:"flex", justifyContent:"center",padding:"50px",'@media ( max-width: 480px)':{
         height:"100%",
         padding: "0px 50px"
      }}}> 
             
         <Paper elevation={3} className={classes.paper} sx={{borderRadius:"20px",padding:"50px 100px",position:"relative"}}> 
            {largeScreen?
               <div style={{width:"2px",top: "0%",left: "50%",marginTop: "-50px",marginLeft: "-50px",height: "120%", backgroundColor:"black",zIndex:"1",position: "absolute",
                     '@media ( max-width: 480px)':{
                     display:"none"
                     }}}>
               </div>
               :
               <></>
            }
            <Grid container  justifyContent="center" direction={largeScreen?"row":"column"}
               alignItems="center" sx={{ padding:"50px",'@media ( max-width: 480px)':{
                  padding:"0px"
                  }}}>
               <Grid item xs={6}  >
                  <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}> 
                     <InformationContact/>
                  </Collapse>
               </Grid>
               <Grid item xs={6} sx={{display:"flex",justifyContent: "center",'@media ( max-width: 480px)':{
                  width:"100%"
                  }}}>
                 
                     <FormContact/>
                 
               </Grid>
            </Grid>
             
         </Paper>
          
      </Box>
       
   );
}

export default PageContact;

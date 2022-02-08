import React from 'react';
import Grid from '@mui/material/Grid';
import Contact from '../components/Contact';
import Title from '../components/Title';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Hobby from '../components/Hobby';
import AboutMe from '../components/AboutMe';
import IconTask from '../components/IconTask';
import { useMediaQuery,} from "@mui/material";
function PageWork480() {
   
   const largeScreen1 = useMediaQuery('(max-width:480px)');
   const largeScreen2 = useMediaQuery('(max-width:900px)');
   const largeScreen3 = useMediaQuery('(max-width:1024px)');
   console.log("??::",largeScreen1,':',largeScreen2,':',largeScreen3)
   return (
      <Grid container  spacing={1}sx={{height:"100%",backgroundColor:"#1b1613" }}>
         <Grid item xs={12}>
            <Grid container spacing={2}>
               <Grid item xs={12}>
                  <Title/>
               </Grid>
               <Grid item xs={12} >
                  <AboutMe/>
               </Grid>
               <Grid item xs={12} sx={{marginTop:"30px"}}>
                  <IconTask/>
               </Grid>
            </Grid>
         </Grid>
         <Grid item xs={12}  >
            <Grid container sx={{paddingTop:"22px"}}>
               <Grid item xs={12}>
                  <Contact/>
               </Grid>
               <Grid item xs={12} sx={{marginTop:"30px"}}>
                  <Experience/>
               </Grid>
               <Grid item xs={12} sx={{marginTop:"30px"}}>
                  <Education/>
               </Grid>
               <Grid item xs={12} sx={{marginTop:"20px"}}>
                  <Hobby/>
               </Grid>

            </Grid>
         </Grid>
      </Grid>
   );
}
export default PageWork480;

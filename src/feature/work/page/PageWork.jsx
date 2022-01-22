import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Contact from '../components/Contact';
import Title from '../components/Title';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Hobby from '../components/Hobby';
import AboutMe from '../components/AboutMe';
import IconTask from '../components/IconTask';
const useStyles = makeStyles({
 
   root:{
      padding:"50px",
      position:"relative",
      height:"100%"
   },
  
    
 });
function PageWork() {
   const classes = useStyles()
 
   return (
      <Grid container  spacing={1}sx={{height:"100%",backgroundColor:"#1b1613",padding:"30px"}}>
         <Grid item xs={4}>
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
         <Grid item xs={8}  >
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
export default PageWork;

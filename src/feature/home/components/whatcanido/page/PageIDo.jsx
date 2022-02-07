import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import ListContent from '../components/List';
const useStyles = makeStyles({
   root:{
      padding:"50px",
      '@media ( max-width: 480px)':{
         padding:"0px",
      },
      '@media ( max-width: 900px)':{
         padding:"50px 30px",
      }
   },
    
});

function PageIDo() {
   const classes = useStyles()
   return (
      <div>
         <Grid container  spacing={0} alignItems="center" justifyContent="center" className={classes.root}>
            <Grid item xs={12}  sx={{textAlign: "center"}}   >
               <Typography sx={{fontWeight:"650",fontSize: "2rem",color:"rgba(14, 61, 194, 0.8)"}}>What can i do?</Typography>
            </Grid>
            <Grid item xs={12} sx={{paddingTop:"20px",height:"100%"}}>
               <ListContent/>
            </Grid>
             
         </Grid>
      </div>
   );
}

export default PageIDo;

import React from 'react';
 
 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
AdminPage.propTypes = {

};
 

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const useStyles = makeStyles((theme) => ({
   link:{
      textDecoration: "none",
      '& .MuiPaper-root':{
         margin:"0px 0px 0px 32px", 
         color: "rgb(23, 23, 23)",fontWeight: "700",fontSize:"1.1rem",
         transition: "0.5s",
         '&:hover':{
            background: "linear-gradient(90deg, #0162c8, #55e7fc)",
            color:"#fff",
         }, 
      }
       
   }
}));
function AdminPage(props) {
   const classes = useStyles();
   return (
      <div style={{height:"100vh",background:"linear-gradient(90deg,#755bea, #ff72c0)",display:"flex"}}>
         <Grid container sx={{margin:"50px"}}>
            <Grid item xs={6} >
               <Grid container  sx={{'& .MuiGrid-item':{margin:"40px",width:"40%"}}}   
                     direction="column" justifyContent="space-between" alignItems="flex-start">
                  <Grid item xs={6}>
                     <Link to="admin/intro" className={classes.link}   >
                        <Item>Change Intro</Item>
                     </Link>
                     
                  </Grid>
                  <Grid item xs={6}>
                     <Link to="admin/about" className={classes.link}  >
                        <Item>Change About</Item>
                     </Link>
                  </Grid>
                  <Grid item xs={6}>
                     <Link to="admin/product"  className={classes.link} >
                        <Item>Change Product</Item>
                     </Link>
                  </Grid>
               </Grid>
            </Grid>
            <Grid item xs={6}>
               
            </Grid>
         </Grid>
      </div>
    );
}

export default AdminPage;
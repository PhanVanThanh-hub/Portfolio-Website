import React  from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
 
const useStyles = makeStyles((theme) => ({
  
   appbar: {
      background: "transparent"
   },
   appbarWrapper: {
      width:"80%",
      margin: '0 auto',
   },
   appbarTitle: {
      flexGrow: '1',
      color:"black"
 
   },
   colorText: {
      color: '#5AFF3D',
   },
   link:{
      textDecoration: "none",margin:"0px 0px 0px 32px", 
      color: "rgb(23, 23, 23)",fontWeight: "700",fontSize:"1.1rem",
      transition: "0.7s",
      '&:hover':{
         color:"rgba(19, 165, 229, 0.8)",
      },
      
   }
   
}));
export default function Header() {
   const classes = useStyles();
   return (
      <AppBar className={classes.appbar}  elevation={1}sx={{background:"#fff"}}>
         <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>
               My<span className={classes.colorText}>Profile.</span> 
            </h1>
            <div style={{display: "flex",flexDirection: "row",marginLeft: "16px",webkitBoxAlign: "center",
                        alignItems: "center",}}>
               <Link to="/" className={classes.link}  >
                           Home
               </Link>
           
               <Link to="/cv" className={classes.link}>
                  CV
               </Link>
            </div>
         </Toolbar>
      </AppBar>
   );
}
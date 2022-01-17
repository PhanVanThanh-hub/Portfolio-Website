import React ,{useLayoutEffect,useState} from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import Model from '../../layout/components/layout-model/layoutModel';
import DrawerUI from './Drawer';
import image from '../../static/image/header/Pusheen_Zoom_Background_Campfire_2020.jpg';
import {
    
   useMediaQuery,
 } from "@mui/material";
const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      fontFamily: 'Nunito',
      backgroundImage:`url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    
   },
   appbar: {
      backgroundImage:`url(${image})`,
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
      
   },
   logo:{
       
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: "-50px",
      marginLeft: "-50px",
 
   },
   container: {
      textAlign: 'center',
   },
   title: {
      color: '#fff',
      fontSize: '4.5rem',
   },
   img:{
      transition: "1s",
      position: "absolute",
      height:"100%",
      width:"100%",
      backgroundImage:`url(${image})`,
   },
}));

export default function Header() {
   const classes = useStyles();
   const [sticky , setSticky]= useState(true)
   const largeScreen = useMediaQuery('(min-width:480px)');
   useLayoutEffect(() => {
      function updatePosition() {
         if(window.pageYOffset>0){
            setSticky(false)
         }
         else{
            setSticky(true)
         }
      }
      window.addEventListener('scroll', updatePosition);
      updatePosition();
   }, );
   return (
      <AppBar elevation={1}sx={{transition: "1s",background:"#fff",height: sticky ? "100vh":"10vh"}}>
         {
            sticky?
               <div className={classes.root} id="header" >
                  <div className={classes.container}>
                     <h1 className={classes.title}>
                        Welcome to <br />
                        My<span className={classes.colorText}>Profile</span>
                     </h1>  
                    
                  </div>
               </div>
            :
            <>
               <Toolbar className={classes.appbarWrapper}>
                  <h1 className={classes.appbarTitle}>
                     My<span className={classes.colorText}>Profile.</span> 
                  </h1>
                  {
                     largeScreen?
                     <div style={{display: "flex",flexDirection: "row",marginLeft: "16px",webkitBoxAlign: "center",
                                 alignItems: "center",}}>
                        <Link to="/" className={classes.link}  >
                                    Home
                        </Link>
                  
                        <Link to="/cv" className={classes.link}>
                           CV
                        </Link>
                        <Model/>
                     </div>
                     :<>
                        <DrawerUI/>
                        <Model/>
                     </>
                  }
                  
               </Toolbar>
            </>
         }
          
      </AppBar>
   );
}
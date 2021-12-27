import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Grid from '@mui/material/Grid';
const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Nunito',
      backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/9387992c8d13663da62cf78b0e1b9d9e.jpg'}) `,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    
   },
   appbar: {
      background: "transparent"
   },
   appbarWrapper: {
      width: '80%',
      margin: '0 auto',
   },
   appbarTitle: {
      flexGrow: '1',
      color:"red"
   },
   icon: {
      color: '#fff',
      fontSize: '2rem',
   },
   colorText: {
      color: '#5AFF3D',
   },
   container: {
      textAlign: 'center',
   },
   title: {
      color: '#fff',
      fontSize: '4.5rem',
   },
   goDown: {
      color: '#5AFF3D',
      fontSize: '4rem',
   },
}));
export default function Header() {
   const classes = useStyles();
   const [checked, setChecked] = useState(false);
  
   useEffect(() => {
      setChecked(true);
   }, []);
   return (
      <div className={classes.root} id="header" >
         <AppBar className={classes.appbar}  elevation={1}sx={{background:"#fff"}}>
            <Grid container justifyContent="space-between" alignItems="center"   >
               <Grid item sx={6} sx={{marginLeft:"20px"}}>
                  <h1 className={classes.appbarTitle}>
                     My Profile 
                  </h1>
               </Grid>
               <Grid item sx={6} sx={{marginRight:"20px"}}>
                  <a to="/"style={{color:"blue"}}>
                     Home
                  </a>
                  <a to="/cv"style={{color:"blue"}}>
                     CV
                  </a>
               </Grid>
            </Grid>
         </AppBar>

         <Collapse id ="collapse"
         in={checked}
         {...(checked ? { timeout: 3000 } : {})}
         collapsedheight={50}
         >
         <div className={classes.container}>
            <h1 className={classes.title}>
               Welcome to <br />
               My<span className={classes.colorText}>Profile</span>
            </h1>
            <Scroll to="information" smooth={true}>
               <IconButton>
               <ExpandMoreIcon className={classes.goDown} />
               </IconButton>
            </Scroll>
         </div>
         </Collapse>
      </div>
   );
}
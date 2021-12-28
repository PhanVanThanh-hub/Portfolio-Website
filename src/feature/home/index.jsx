 
import HomePage from './page/PageHome';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { IconButton, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Box from "@mui/material/Box";
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
   container: {
      textAlign: 'center',
   },
   icon: {
      color: '#fff',
      fontSize: '2rem',
   },
   colorText: {
      color: '#5AFF3D',
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
function Home() {
   const classes = useStyles();
   const [checked, setChecked] = useState(false);
  
   useEffect(() => {
      setChecked(true);
   }, []);
   return (
      <div  >
         <div className={classes.root} id="header" >
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
         <Box  sx={{ display: "flex", bgcolor: 'background.primary', color: 'text.primary', }}>
            <HomePage/>
         </Box>
          
      </div>
   );
}

export default Home;

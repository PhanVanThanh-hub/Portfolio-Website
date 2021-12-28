import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
   link:{
      textDecoration: "none",margin:"0px 0px 0px 32px", 
      color: "rgb(23, 23, 23)",fontWeight: "700",fontSize:"1.1rem",
      transition: "0.7s",
      '&:hover':{
         color:"rgba(19, 165, 229, 0.8)",
      }, 
   }
}));
export default function DrawerUI() {
   const classes = useStyles();
   const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
   });

   const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
         return;
      }

      setState({ ...state, [anchor]: open });
   };

   const list = (anchor) => (
      <Box
         sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
         role="presentation"
         onClick={toggleDrawer(anchor, false)}
         onKeyDown={toggleDrawer(anchor, false)}
      >
         <List  >
         
            <ListItem button key="home">
               <ListItemIcon>
                  <AccountCircleIcon />  
               </ListItemIcon>
               <ListItemText primary={
                  <Link to="/" className={classes.link}>
                              Home
                  </Link>}
               />
                   
           
            </ListItem>
            <ListItem button key="cv" >
               <ListItemIcon>
                  <InsertEmoticonIcon />  
               </ListItemIcon>
               <ListItemText primary={
                  <Link to="/cv" className={classes.link}>
                              CV
                  </Link>}
               />
                 
            </ListItem>
         
         </List>
      </Box>
   );

   return (
      <div>
         <React.Fragment key={"left"}>
            <Button onClick={toggleDrawer("left", true)}><MenuIcon/></Button>
            <Drawer
               anchor={"left"}
               open={state["left"]}
               onClose={toggleDrawer("left", false)}
            >
               {list("left")}
            </Drawer>
         </React.Fragment>
      </div>
   );
}

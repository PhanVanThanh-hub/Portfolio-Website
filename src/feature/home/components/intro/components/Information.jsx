import React from 'react';
import Grid from '@mui/material/Grid';
 
import Typography from '@mui/material/Typography';
import {List,ListItem,ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Collapse } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const useStyles = makeStyles({
   item:{
      height:"100%",
      animation :"$move 10s ease-in-out infinite alternate"
   },
   "@keyframes move": {
      "25%": { 
        transform: "translateY(-50px)"
      },
      "50%": { 
         transform: "translateY(-100px)"
      },
      "75%": { 
         transform: "translateY(-150px)"
      },
      "100%": { 
         transform: "translateY(-200px)"
      },
      "125%": { 
         transform: "translateY(-250px)"
      },
      "150%": { 
         transform: "translateY(-300px)"
      },
       
    },
   itemText: {
      height:"50px",
      color:"#59b256",
      display:"flex",
      alignItems:"center",
   },
   root:{
      padding:"50px",
 
   },
   iScroll:{
      width:"30px",
      height:"30px",
      position:"absolute",
      top:"100px"
   },
   icon:{
      transition:"0.2s",
      '&:hover':{
         color:"#0A66C2"
      }
   }
 });
 

function Information(props) {
   const classes = useStyles()
   const {checked} = props
   return (
      <Collapse in={checked}  {...(checked ? { timeout: 2000 } : {})}> 
         <Grid container spacing={3}>
            <Grid item xs={12}>
               <Typography variant="h1" sx={{fontSize:"60px" ,fontFamily: "fantasy",letterSpacing: "1.5px"}}>HELLO!MY NAME IS</Typography>
            </Grid>
            <Grid item xs={12}>
               <Typography variant="h1" sx={{fontSize:"60px",fontFamily: "fantasy",letterSpacing: "1.5px" }}>PHAN VAN Thanh</Typography>
            </Grid>
            <Grid item xs={12}>
               <Typography variant="h1" sx={{fontSize:"60px",fontFamily:"cursive",letterSpacing: "1.5px" }}>Software Developer</Typography>
            </Grid>
            <Grid item xs={12}>
               <List sx={{height:"50px",overflow:"hidden"}}  >
                  {props.roles.map((role)=>
                     <ListItem className={classes.item} key={role} >
                        <ListItemText className={classes.itemText} key={role}  primary={<Typography sx={{fontSize:"30px",fontWeight:"bold",}}>
                           {role}
                        </Typography>}/>
                     </ListItem>
                  )}
               </List>
            </Grid>
            <Grid item xs={12}>
               <Grid container spacing={1}>
                  <Grid item sx={3}>
                     <a href="https://github.com/PhanVanThanh-hub" target="_blank">
                        <GitHubIcon className={classes.icon} sx={{height:"4em",width:"4em"}}/>
                     </a>
                      
                  </Grid>
                  <Grid item sx={3}>
                     <a href="https://www.linkedin.com/in/thanh-phan-13b796220/" target="_blank">
                        <LinkedInIcon className={classes.icon} sx={{height:"4em",width:"4em"}}/>
                     </a>
                  </Grid>
               </Grid>
                
                
            </Grid>
             
         </Grid>
          
      </Collapse>        
   );
}

export default Information;

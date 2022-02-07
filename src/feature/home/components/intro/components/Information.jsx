import React from 'react';
import Grid from '@mui/material/Grid';
 
import Typography from '@mui/material/Typography';
import {List,ListItem,ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Collapse } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
   },
   grid:{
      '& .MuiGrid-item':{
         '@media (max-width:480px)': {
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
         },
          
      } 
   }
 });
 
const theme = createTheme();

theme.typography.h1 = {
   fontSize:"3.525rem" ,letterSpacing: "1.5px" ,
   '@media (max-width:600px)': {
     fontSize: '30px',
   },
    
 };
function Information(props) {
   const classes = useStyles()
   const {checked} = props
   return (
      <ThemeProvider theme={theme}> 
      <Collapse in={checked}  {...(checked ? { timeout: 2000 } : {})}> 
         <Grid container className={classes.grid}  >
            <Grid item xs={12}>
               <Typography variant="h1" sx={{color: "rgb(55, 102, 244)"}} >Phan Van Thanh</Typography>
            </Grid>
            <Grid item xs={12}>
               <Typography variant="h1"   >Software Developer</Typography>
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
               <Grid container spacing={1} 
                     sx={{'@media (max-width:480px)':{
                           display: "flex",justifyContent:"center"
                     }}}
               >
                  <Grid item sx={3}>
                     <a href="https://github.com/PhanVanThanh-hub" target="_blank">
                        <GitHubIcon className={classes.icon} sx={{height:"2em",width:"2em"}}/>
                     </a>
                      
                  </Grid>
                  <Grid item sx={3}>
                     <a href="https://www.linkedin.com/in/thanh-phan-13b796220/" target="_blank">
                        <LinkedInIcon className={classes.icon} sx={{height:"2em",width:"2em"}}/>
                     </a>
                  </Grid>
               </Grid>
                
                
            </Grid>
             
         </Grid>
          
      </Collapse>   
      </ThemeProvider>     
   );
}

export default Information;

import React from 'react';
import Grid from '@mui/material/Grid';
 
import Typography from '@mui/material/Typography';
import {List,ListItem,ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Collapse } from '@mui/material';
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
   }
 });
 

function Information(props) {
   const classes = useStyles()
   const {checked} = props
   return (
      <Collapse in={checked}  {...(checked ? { timeout: 2000 } : {})}> 
         <Grid container spacing={3}  >
            <Grid item xs={12}>
               <Typography variant="h2" sx={{fontSize:"30px",fontWeight:"300"}}>Hello,My name  is</Typography>
            </Grid>
            <Grid item xs={12}>
               <Typography variant="h1" sx={{fontSize:"60px" }}>{props.name}</Typography>
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
               <div>
                  {props.des}
               </div>
            </Grid>
         </Grid>
         {/* <Grid container alignItems="center" justifyContent="center" sx={{position:"relative",backgroundColor:"red"}} >
            <Grid item >
               <svg width="75" height="75" viewBox="0 0 75 75" fill="none" stroke="black" className={classes.iScroll} xmlns="http://www.w3.org/2000/svg">
               <g id="scroll">
                  <path
                  id="Vector"
                  d="M40.5 15L34.5 9L28.5 15"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  />
                  <path
                  id="Vector_2"
                  d="M28.5 24L34.5 30L40.5 24"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  />
                  <g id="Group">
                  <path
                     id="Vector_3"
                     d="M9 37.5H60"
                     stroke-width="3"
                     stroke-miterlimit="10"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  </g>
                  <path
                  id="Vector_4"
                  d="M34.5 27V9"
                  stroke-width="2.9895"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  />
                  <g id="Group_2">
                  <path
                     id="Vector_5"
                     d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                     stroke-width="3"
                     stroke-miterlimit="10"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  </g>
               </g>
               </svg>
            </Grid>
         </Grid>    */}
      </Collapse>        
   );
}

export default Information;

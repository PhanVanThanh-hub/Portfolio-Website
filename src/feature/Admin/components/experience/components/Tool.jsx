import React  from 'react';
import Grid from "@mui/material/Grid";
import { ButtonBase } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import {showAddModel} from '../ExperienceSlice';
import {useDispatch } from 'react-redux';
const useStyles = makeStyles({
 
   form:{
      width:"50%"
   },
   outLine:{
      fontSize: "0.875rem",
      fontWeight: "400",
      lineHeight: "1.4375em",
      background: "rgb(250, 250, 250)",
      borderRadius: "12px",
      '& .MuiOutlinedInput-input':{
         color: "rgb(33, 33, 33)",
         font: "inherit",
         background: "rgb(250, 250, 250)",
         padding: "15.5px 14px 15.5px 4px",
         borderRadius: "12px",
      }
   },
   button:{
      width: "32px",
      height: "32px",
      borderRadius:"50%",color: "rgb(255, 255, 255)",backgroundColor: "rgb(33, 150, 243)"
   }
    
 });
function ToolProduct(props) {
    
   const classes = useStyles()
   const dispatch = useDispatch();
   return (
      <Grid container spacing={1}    justifyContent="center" alignItems="center">
         <Grid item xs={12} sm={6}>
         </Grid>
         <Grid item xs={12} sm={6} sx={{textAlign: "right",paddingRight:"16px"}}>
            <Tooltip title="Add Education" arrow>
               <ButtonBase className={classes.button}>
                  <AddIcon 
                     onClick ={()=>
                        {
                           const actions = showAddModel()
                           dispatch(actions)}} 
                  />
               </ButtonBase>
            </Tooltip>
             
         </Grid>
      </Grid>
       
   
   );
}

export default ToolProduct;

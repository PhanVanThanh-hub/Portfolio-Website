import React,{useState}  from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import Grid from "@mui/material/Grid";
import { ButtonBase } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import {ShowAddProduct} from './ProductSlice';
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
   const [value ,setValue] = useState("")
   const handleChange= (e)=>{
      setValue(e.target.value)
       
   }
   const classes = useStyles()
   const dispatch = useDispatch();
   props.handleChangeProduct(value)
   return (
      <Grid container spacing={1}    justifyContent="center" alignItems="center">
         <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ m: 1 }} className={classes.form}>
               <OutlinedInput
                  className={classes.outLine}
                  id="outlined-adornment-amount"
                  value={value}
                  placeholder="Search Product"
                  onChange={handleChange}
                  startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
                  label="Amount"
               />
            </FormControl>
         </Grid>
         <Grid item xs={12} sm={6} sx={{textAlign: "right",paddingRight:"16px"}}>
            <Tooltip title="Add product" arrow>
               <ButtonBase className={classes.button}>
                  <AddIcon 
                     onClick ={()=>
                        {
                           const actions = ShowAddProduct()
                           dispatch(actions)}} />
               </ButtonBase>
            </Tooltip>
             
         </Grid>
      </Grid>
       
   
   );
}

export default ToolProduct;

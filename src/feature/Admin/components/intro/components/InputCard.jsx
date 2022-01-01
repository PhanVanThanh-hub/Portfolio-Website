import React,{useState} from 'react';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
 
import { InputBase,Button ,IconButton} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import {addChip} from './IntroSlice';
import { useDispatch } from 'react-redux';
const useStyle=makeStyles((theme)=>({
   card:{
      
      paddingBottom:theme.spacing(4),
      margin:theme.spacing(0,1,1,1),
      padding:theme.spacing(1,1,1,0)
   },
   input:{
      '& .MuiInputBase-input':{
         margin:theme.spacing(1)
      }
   },
   btnConfirm:{
      background:"#5AAC44",
      color:"#fff",
      '&:hover':{
         background:"#5AAC44"
      }
   },
   confirm:{
      margin:theme.spacing(0,1,1,1),
   }



}))
export default function InputCard(props){
   const classes = useStyle()
   const [cardTitle,setCardTitle] = useState('')
   const dispatch = useDispatch();
   const handleChange =(e)=>{
      setCardTitle(e.target.value)
   }
   const onClickAddChip=()=>{
      const actions = addChip({value:cardTitle})
      dispatch(actions)
      setCardTitle("")
   }  
   
   return(
      <div>
         <div >
            <Paper className={classes.card} >
               <InputBase 
                  onChange={handleChange}
                  multiline 
                  onBlur={()=>props.setOpen(false)}
                  fullWidth
                  className={classes.input}
                  placeholder="Enter a title of this card..." 
                  value={cardTitle}
               />
            </Paper>
         </div>
         <div className={classes.confirm}>
            <Button sx={{background:"linear-gradient(90deg, #0162c8, #55e7fc)",color:"#fff",textTransform:"none",
                         fontSize:"20px",borderRadius:"12px",
                        '&:hover':{
                           background:"linear-gradient(90deg,#755bea, #ff72c0)"
                        }}}
               onClick={onClickAddChip}
            >
               Add Role
            </Button>
            <IconButton onClick={()=>props.setOpen(false)}>
               <ClearIcon />
            </IconButton>
         </div>
      </div>
       
   )
}
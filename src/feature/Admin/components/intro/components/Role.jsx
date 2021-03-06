import  React,{useState} from 'react';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import {Typography } from '@mui/material';
import InputCard from './InputCard';
import { Collapse } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {deleteChip} from './IntroSlice';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import introApi from '../../../../../api/introApi';
import Swal from 'sweetalert2';
const useStyle=makeStyles((theme)=>({
   root:{
      marginTop:theme.spacing(1),
   },
   addCard:{
      padding: theme.spacing(1,1,1,2),
      margin: theme.spacing(0,1,1,1),
      background:'rgba(27, 190, 10, 0.8)',
      borderRadius:"12px",
      '&:hover':{
         backgroundColor:'rgba(19, 255, 0, 0.8)'
      }
   }


}))
 

export default function Role() {
   const chipRedux = useSelector(state => state.intro.value.chip)
  
   const dispatch = useDispatch();
   const handleDelete = (chipToDelete) => () => {
      const actions = deleteChip({value:chipToDelete})
      dispatch(actions)
      
      
    };
   const handleClick =async()=>{
 
      try {
         const response = await introApi.updateRole({chip:chipRedux});
         if(response.data.message==="Done"){
            Swal.fire({
               icon: 'success',
               title: 'Done',
               text: 'Cập nhật vai trò thành công',
                
             })
           }
      }
      catch{
         Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Lỗi cập nhật!',
             
          })
      }
   }

   const classes = useStyle()
   const [open, setOpen]=useState(false)
   return (
       
         <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12}  > 
               {chipRedux.map((data,index) => {
                  return (
                     <Chip label={data}  variant="outlined" 
                        sx={{color:"rgba(69, 201, 56, 0.8)",borderColor:"rgba(69, 201, 56, 0.8)",fontWidth:"bold",margin:"8px"}} 
                        onDelete={handleDelete(data)}
                     />
                  );
               })}
            </Grid>
            <Grid item xs={3}> 
               <div className={classes.root}>
                        <Collapse in={open}>
                           <InputCard setOpen={setOpen}/>
                        </Collapse>
                        <Collapse in={!open}>
                           <Paper   className={classes.addCard} 
                                 elevation={0}
                                 onClick={()=>setOpen(!open)}
                           >
                              <Typography sx={{fontWeight:"bold"}}>Add a chip</Typography>
                           </Paper>
                        </Collapse>
                        
               </div>
            </Grid>
            <Grid item xs={3}>
               <Button variant="contained" onClick={handleClick}
                  sx={{fontWeight:"bold",borderRadius:"12px",marginTop:"16px",background:"linear-gradient(90deg, #0162c8, #55e7fc)",
                  color:"black"}}
               >
                  Confirm
               </Button>
            </Grid>
         </Grid>
       
   );
}

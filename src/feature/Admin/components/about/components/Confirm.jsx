import React from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Content from '../../../../home/components/about/components/Content';
import Image from '../../../../home/components/about/components/Image';
import aboutApi from '../../../../../api/aboutApi';
import Swal from 'sweetalert2';
const useStyles = makeStyles({
 
   root:{
      padding:"25px",
      position:"relative",
      height:"50%"
   },
   boxModel:{
      backgroundColor:"#fff",width:"80%" ,position: 'absolute',top: '50%',left: '50%',
      transform: 'translate(-50%, -50%)',borderRadius:"16px"
   }
 
    
 });
export default function Confirm(props) {
   const classes = useStyles()
   
    
   const update =async()=>{
      try {
         if(!!props.value===true){
             
            const response = await aboutApi.updateAbout({about:props.value});
            if(response.data.message==="Done"){
               Swal.fire({
                  icon: 'success',
                  title: 'Done',
                  text: 'Cập nhật mô tả thành công',
                   
                })
              }
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
   return (
      <Box className={classes.boxModel}>
         <Grid container   direction="row"alignItems="center" justifyContent="center" 
            sx={{ width:"100%",height:"100%",position:"relative",}}
         >
            <Grid item xs={6}   className={classes.root} >
               <Image image={props.image}/>
            </Grid>
            <Grid item xs={6} sx={{ padding:"50px"}}>
               <Content about={props.value}/>
            </Grid>
            <Grid item sx={{position:"absolute",top:"90%"}}>
               <Button variant="contained" type="submit" onClick={update}
                  sx={{fontWeight:"bold",borderRadius:"12px",marginTop:"16px",background:"linear-gradient(90deg, #0162c8, #55e7fc)",
                  color:"black"}}
               >
                  Confirm
               </Button>
            </Grid>
         </Grid>              
      </Box>
   );
}

 

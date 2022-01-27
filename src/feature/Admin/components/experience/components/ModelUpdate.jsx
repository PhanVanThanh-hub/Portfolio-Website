import  React from 'react';
 
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputAreaField from '../../../../../components/form-control/InputAreaField';
import cvApi from '../../../../../api/cvApi';
import Swal from 'sweetalert2';
import {reloadPage} from '../../../AdminSlice';
import {useDispatch } from 'react-redux';
import InputField from '../../../../../components/form-control/InputField/index';
export default function ModelUpdate(props) {
   const {data} =props
   const form = useForm({
         defaultValue: {
            Year:"",
            Title: "",
            Detail: "",
         },
        
   });
   const dispatch = useDispatch();
   const handleSubmit = (values) => {
      if(!!values.Year===false && !!values.Title===false && !!values.Detail===false )
      {
         Swal.fire({
            icon: 'error',
            title: 'Lỗi',
            text: 'Bạn chưa thay đổi bất kì thông tin gì',   
         })
      }
      else{
         update(values)
      }
   }
   const update =(values)=>{
      const newData = {...data}
       
      if(!!values.Year===true){
         newData["Year"] = values.Year;
      }
      if(!!values.Title===true){
         newData["Title"] = values.Title;
      }
      if(!!values.Detail===true){
         newData["Detail"] = values.Detail;
      }
 
      const response=cvApi.updateExperience(newData);
       
      response.then(result =>
         notification(result)
         
      )
   }
   const notification=(result)=>{
      if(result===false){
         Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Cập nhật không thành công',   
            })
      }
      else{
         const actions = reloadPage()
         dispatch(actions)
         Swal.fire({
            icon: 'success',
            title: 'Done',
            text: 'Cập nhật thành công ',   
            })
      }
     
   }
   return (
      <Grid container  spacing={3} justifyContent="center" alignItems="center"  >
         <Grid item xs={6}  >
            <Typography sx={{fontWeight:"bold",fontSize:"2rem",fontFamily:"cursive"}}>
               {data.Year}
            </Typography>
            <Typography sx={{fontWeight:"bold",fontSize:"1.5rem",fontFamily:"cursive"}}>
               {data.Title}
            </Typography>
            <Typography sx={{marginTop:"20px"}}>
               {data.Detail}
            </Typography>
         </Grid>
         <Grid item xs={6}>
            <form initialvalues={{ remember: true }}  onSubmit={form.handleSubmit(handleSubmit)}>
               <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form}  name="Year" label="Year" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form} name="Title" label="Title" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputAreaField form={form} style={{height:"250px"}}  name="Detail" label="Detail" />
                  </Grid>
                  <Grid item xs={12}  sx={{width:"70%"}}>
                     <Button type="primary" shape="round"  
                        sx={{ width: "100%",borderRadius:"35px",textTransform: "none",
                        background: "linear-gradient(90deg, #0162c8, #55e7fc)"}}
                     >
                        <Typography sx={{color:"white",fontWeight:"bold",}}>Upload Product</Typography> 
                     </Button>
                  </Grid>
               </Grid>
                
            </form>
         </Grid>
      </Grid>
   );
}

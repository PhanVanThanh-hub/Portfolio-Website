import  React from 'react';
 
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputField from '../../../../../components/form-control/InputField/index';
import cvApi from '../../../../../api/cvApi';
import Swal from 'sweetalert2';
import {reloadPage} from '../../../AdminSlice';
import {useDispatch } from 'react-redux';
export default function FormUpdate(props) {
   const {data} =props
 
   console.log("data:",data)
   const form = useForm({
         defaultValue: {
            phoneNumber:"",
            email:"",
            address:"",
            github:"",
            website:"",
             
         },
        
   });
   const dispatch = useDispatch();
   const handleSubmit = (values) => {
      if(!!values.phoneNumber===false && !!values.email===false && !!values.address===false && !!values.github===false
         && !!values.website===false )
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
      values["id"]= data["id"]
      cvApi.updateContact(values);
      const actions = reloadPage()
      dispatch(actions)
      Swal.fire({
         icon: 'success',
         title: 'Done',
         text: 'Cập nhật mô tả thành công',   
      })   
   }
   return (
     
         <Grid item xs={6}>
            <form initialvalues={{ remember: true }}  onSubmit={form.handleSubmit(handleSubmit)}>
               <Grid container >
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form}  name="phoneNumber" label="PhoneNumber" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form}  name="email" label="Email" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form}  name="address" label="Address" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form}  name="github" label="Github" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form}  name="website" label="Website" />
                  </Grid>
                  <Grid item xs={12}  sx={{width:"70%"}}>
                     <Button type="primary" shape="round"  
                        sx={{ width: "100%",borderRadius:"35px",textTransform: "none",
                        background: "linear-gradient(90deg, #0162c8, #55e7fc)"}}
                     >
                        <Typography sx={{color:"white",fontWeight:"bold",}}>Update Contact</Typography> 
                     </Button>
                  </Grid>
               </Grid>
                
            </form>
         </Grid>
      
   );
}

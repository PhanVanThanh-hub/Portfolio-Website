import  React from 'react';
 
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputAreaField from '../../../../../components/form-control/InputAreaField';
import faqApi from '../../../../../api/faqApi';
import Swal from 'sweetalert2';
import {reloadPage} from '../../../AdminSlice';
import {useDispatch } from 'react-redux';
export default function ModelUpdate(props) {
   const {data} =props
 

   const form = useForm({
         defaultValue: {
            answer: "",
         },
        
   });
   const dispatch = useDispatch();
   const handleSubmit = (values) => {
      if(!!values.answer===false)
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
      data["answer"] = values.answer;
      faqApi.update(data);
       
      const actions = reloadPage()
      dispatch(actions)
      Swal.fire({
         icon: 'success',
         title: 'Done',
         text: 'Cập nhật mô tả thành công',   
      })   
   }
   return (
      <Grid container  spacing={3}>
         <Grid item xs={6}>
            <Typography sx={{fontWeight:"bold",fontSize:"1.5rem",fontFamily:"cursive"}}>
               {data.question}
            </Typography>
            <Typography sx={{marginTop:"20px"}}>
               {data.answer}
            </Typography>
         </Grid>
         <Grid item xs={6}>
            <form initialvalues={{ remember: true }}  onSubmit={form.handleSubmit(handleSubmit)}>
               <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputAreaField form={form} style={{height:"250px"}}  name="answer" label="Answer" />
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

import  React,{useState} from 'react';
 
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputField from '../../../../../components/form-control/InputField/index';
import faqApi from '../../../../../api/faqApi';
import Swal from 'sweetalert2';
import {reloadPage,HideAddFAQ} from '../FAQSlice';
import {useDispatch } from 'react-redux';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import InputAreaField from '../../../../../components/form-control/InputAreaField';
export default function ModelAddFAQ() {
   const dispatch = useDispatch();
   const schema = yup.object().shape({
      question: yup.string().required("Xin vui lòng nhập câu hỏi"),
      answer: yup.string().required("Xin vui lòng nhập câu trả lời")
   });
   const form = useForm({
         defaultValue: {
            question: "",
            answer:""
         },
         resolver: yupResolver(schema),
        
   });
   const handleSubmit =(values) => {
      const response =  faqApi.addFAQparams(values);
      response.then(result =>
         notification(result)
         
      )
       
   }
   const notification=(result)=>{
      if(result===false){
         const actions = reloadPage()
         dispatch(actions)
         Swal.fire({
            icon: 'error',
            title: 'Trùng câu hỏi',
            text: 'Câu hỏi đã tồn tại',   
            })
      }
      else{
         const actions = reloadPage()
         dispatch(actions)
         Swal.fire({
            icon: 'success',
            title: 'Done',
            text: 'Đã thêm ',   
            })
      }
      const actions = reloadPage()
      dispatch(actions)
      const actions1 = HideAddFAQ();
      dispatch(actions1)
   }
   return (
      <Grid container direction="column" justifyContent="center" alignItems="center">
         <Grid item xs={6}>
            <form initialvalues={{ remember: true }}  onSubmit={form.handleSubmit(handleSubmit)}>
               <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form}  name="question" label="Question" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputAreaField form={form} style={{height:"90px"}}  name="answer" label="Answer" />
                  </Grid>
                  <Grid item xs={12}  sx={{width:"70%"}}>
                     <Button type="primary" shape="round"  
                        sx={{ width: "100%",borderRadius:"35px",textTransform: "none",
                        background: "linear-gradient(90deg, #0162c8, #55e7fc)"}}
                     >
                        <Typography sx={{color:"white",fontWeight:"bold",}}>Create Product</Typography> 
                     </Button>
                  </Grid>
               </Grid>
                
            </form>
         </Grid>
      </Grid>
   );
}

import  React from 'react';
 
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputField from '../../../../../components/form-control/InputField/index';
import InputAreaField from '../../../../../components/form-control/InputAreaField';
import cvApi from '../../../../../api/cvApi';
import Swal from 'sweetalert2';
import {reloadPage} from '../../../AdminSlice';
import {useDispatch } from 'react-redux';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import {hideAddModel} from '../EducationSlice';
export default function ModelAddEducation() {
   const dispatch = useDispatch();
   const schema = yup.object().shape({
      Year: yup.string().required("Xin vui lòng nhập thời gian"),
      Title: yup.string().required("Xin vui lòng nhập tiêu đề"),
      Detail: yup.string().required("Xin vui lòng nhập nội dung"),
   });
   const form = useForm({
         defaultValue: {
            Year:"",
            Title:"",
            Detail:"",
         },
         resolver: yupResolver(schema),
        
   });
   
   const handleSubmit =(values) => {
      
      const response = cvApi.addEducation(values);
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
      const actions1 = hideAddModel();
      dispatch(actions1)
   }
   return (
      <Grid container  spacing={3}>
         <Grid item xs={12}>
            <form initialvalues={{ remember: true }}  onSubmit={form.handleSubmit(handleSubmit)}>
               <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form}  name="Year" label="Year" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form} name="Title" label="Title" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputAreaField style={{height:"200px"}} form ={form} name="Detail" label="Detail"/>
                  </Grid>
                   
                  <Grid item xs={12}  sx={{width:"30%"}}>
                     <Button type="primary" shape="round"  
                        sx={{ width: "100%",borderRadius:"35px",textTransform: "none",
                        background: "linear-gradient(90deg, #0162c8, #55e7fc)"}}
                     >
                        <Typography sx={{color:"white",fontWeight:"bold",}}>Create</Typography> 
                     </Button>
                  </Grid>
               </Grid>
                
            </form>
         </Grid>
      </Grid>
   );
}

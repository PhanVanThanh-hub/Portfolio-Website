import  React,{useState} from 'react';
 
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputField from '../../../../../components/form-control/InputField/index';
import SelectChip from '../../../../../components/form-control/SelectField/SelectCustom';
import productApi from '../../../../../api/productApi';
import Swal from 'sweetalert2';
import {reloadPage} from './ProductSlice';
import {useDispatch } from 'react-redux';
export default function ModelAddProduct() {
   
   const form = useForm({
         defaultValue: {
            name: "",
            tech: "",
            des:"",
            frontend:"",
            backend:""
         },
        
   });
   const [image,setImage] =useState();
   const onImageChange = event => {
      if (event.target.files && event.target.files[0]) {
         let img = event.target.files[0];
         setImage(img)
     
        
      }
    };
   const handleSubmit = (values) => {
      console.log("values:",values)
      console.log("img:",image)
      
   }
   return (
      <Grid container  spacing={3}>
         <Grid item xs={6}>
            <form initialvalues={{ remember: true }}  onSubmit={form.handleSubmit(handleSubmit)}>
               <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form}  name="name" label="Name" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <SelectChip tech={[]}  form={form} name="tech" label="Tech" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form} name="des" label="Description" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form} name="frontend" label="Frontend" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form} name="backend" label="Backend" />
                  </Grid>
                  <Grid item xs={12}>
                     <input type="file" name="myImage" onChange={onImageChange} />
                  </Grid>
                  <Grid item xs={12} md={6} sx={{width:"50%"}}>
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

import  React from 'react';
 
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as yup from "yup";
import InputField from '../../../../../components/form-control/InputField/index';
export default function ModelUpdate(props) {
   const {data} =props
   console.log("datemodel:",data.name)
      const schema = yup.object().shape({
         product_name: yup.string().required("Please enter product name"),
         tech: yup.string().required("Please enter the technology to use"),
         description:yup.string().required("Please enter description"),
         
   });

   const form = useForm({
         defaultValue: {
            product_name: "",
            tech: "",
            description:"",
            frontend:"",
            backend:""
         },
         resolver: yupResolver(schema),
   });

      const handleSubmit = (values) => {
            console.log("value:",values)
         
      }
   return (
      <div style={{width: "100%"}}>
            <form initialValues={{ remember: true }}  onSubmit={form.handleSubmit(handleSubmit)}>
               <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form} name="product_name" label="Name" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form} name="tech" label="Tech" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form} name="description" label="Description" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form} name="frontend" label="Frontend" />
                  </Grid>
                  <Grid item xs={12} sx={{width:"100%"}}>
                     <InputField form={form} name="backend" label="Backend" />
                  </Grid>
                  
                  <Grid item xs={12} md={6} sx={{width:"50%"}}>
                     <Button type="primary" shape="round"  
                        sx={{ width: "100%",borderRadius:"35px",
                        background: "linear-gradient(90deg, #0162c8, #55e7fc)"}}
                     >
                        <Typography sx={{color:"white",fontWeight:"bold"}}>Update</Typography> 
                     </Button>
                  </Grid>
               </Grid>
                
            </form>
        </div>
   );
}

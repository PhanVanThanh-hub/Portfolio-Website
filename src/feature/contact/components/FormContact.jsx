import React from 'react';
import Typography from '@mui/material/Typography';
import InputField from '../../../components/form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import * as yup from "yup";
import InputAreaField from '../../../components/form-control/InputAreaField';
function FormContact() {
   const schema = yup.object().shape({
      name: yup.string().required("Please Enter Name"),
      subject: yup.string().required("Please Enter Subject"),
      email: yup.string().required("Please Enter Email"),
      message: yup.string().required("Please Enter Message"),
       
   });

   const form = useForm({
         defaultValue: {
            name: "",
            subject: "",
            email: "",
            message: "",
            
         },
         resolver: yupResolver(schema),
   });

   const handleSubmit = (values) => {
         console.log("values:",values)
   }
   return (
      <> 
         <Typography sx={{fontWeight: "200"}}>
            <b>What’s your story?</b> Get in touch. Always available for
               freelancing if the right project comes along. me.
         </Typography>
         <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div>
               <InputField form={form} name="name" label="Name" />
            </div>
            <div>
               <InputField form={form} name="subject" label="Subject" />
            </div>
            <div>
               <InputField form={form} name="email" label="Email" />
            </div>
            <div>
               <InputAreaField form={form} name="message" label="Message" />
            </div>
            <div>
               <Button type="primary" shape="round" variant="contained" sx={{textTransform:"none"}} >Submit</Button>
            </div>
         </form>
      </>   
       
   );
}

export default FormContact;

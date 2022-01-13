import React from 'react';
import Typography from '@mui/material/Typography';
import InputField from '../../../../../components/form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonBase from '@mui/material/ButtonBase';
import * as yup from "yup";
import InputAreaField from '../../../../../components/form-control/InputAreaField';
import {Card,CardHeader,CardContent,CardActions} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
   button:{
      textTransform:"none", 
      width:"50px",
      height:"50px"
   }
});
function FormContact() {
   const classes=useStyles()
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
      <Card elevation={3} sx={{width:"80%",height:"120%",borderRadius:"24px",'@media ( max-width: 480px)':{
         width:"100%"
         }}}>
         <CardHeader
            style={{textAlign: 'center' }}
            title="Get is touch"
         />
         <form onSubmit={form.handleSubmit(handleSubmit)}>
            <CardContent  > 
               <div  >
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
                       
            </CardContent>
            <CardActions disableSpacing sx={{justifyContent: "end",marginTop:"20px"}}>
               <Typography sx={{marginRight:"6px",fontWeight:"550"}}>
                  SEND
               </Typography>
               <ButtonBase type="primary"  variant="contained" className={classes.button}
                  sx={{borderRadius:"50%",backgroundColor:"rgb(33, 150, 243)",color:"#fff",}}  
               >
                  <EmailOutlinedIcon/>
               </ButtonBase>
            </CardActions>
         </form>
      </Card>
   );
}

export default FormContact;

import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import cvApi from '../../../api/cvApi';
import ContactChild from './ContactChild';
 
export default function Contact() {
   const [phoneNumber,setPhoneNumber] = useState(0); 
   const [email,setEmail] = useState(0); 
   const [address,setAddress] = useState(0); 
   const [github,setGithub] = useState(0); 
   const [website,setWebsite] = useState(0); 
   
   useEffect(() => {
      ; (async () => {
         try {
            const res = await cvApi.getCV()
            const data = res.data[0]
            setPhoneNumber(data["phoneNumber"])
            setEmail(data["email"])
            setAddress(data["address"])
            setGithub(data["github"])
            setWebsite(data["website"])
         } catch (error) {
            console.log("error:",error.message)
         }
      })()
   }, [])
  
   return (
      <Grid container spacing={1} sx={{color:"white"}}>
         <ContactChild icon={<PhoneEnabledIcon/>} detail={phoneNumber}/>
         <ContactChild icon={<EmailIcon/>} detail={email}/>
         <ContactChild icon={<LocationOnIcon/>} detail={address}/>
         <ContactChild icon={<PublicIcon/>} detail={github}/>
         <ContactChild icon={<GitHubIcon/>} detail={website}/>
      </Grid>
   );
}

 

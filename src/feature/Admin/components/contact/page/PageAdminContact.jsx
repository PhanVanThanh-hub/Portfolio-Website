import React ,{useState,useEffect} from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import cvApi from '../../../../../api/cvApi';
import ContactChild from '../../../../../components/grid/ContactChild';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import FormUpdate from '../components/FormUpdate';
import { useSelector } from 'react-redux';
function PageContact() {
   const [phoneNumber,setPhoneNumber] = useState(0); 
   const [email,setEmail] = useState(0); 
   const [address,setAddress] = useState(0); 
   const [github,setGithub] = useState(0); 
   const [website,setWebsite] = useState(0); 
   const [data,setData] = useState([])
   const reloadPage = useSelector(state => state.admin.value)
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
            setData(data)
         } catch (error) {
            console.log("error:",error.message)
         }
      })()
   }, [reloadPage])
  
   return (
      <Box sx={{margin:"50px",justifyContent: "center",display: "flex",backgroundColor:"white",height:"70%",padding:"20px"}}>
         <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={6}>
               <Grid container spacing={1}>
                  <ContactChild icon={<PhoneEnabledIcon/>} detail={phoneNumber}/>
                  <ContactChild icon={<EmailIcon/>} detail={email}/>
                  <ContactChild icon={<LocationOnIcon/>} detail={address}/>
                  <ContactChild icon={<PublicIcon/>} detail={github}/>
                  <ContactChild icon={<GitHubIcon/>} detail={website}/>
               </Grid>
            </Grid>
            <Grid item xs={6}  >
               <FormUpdate data={data}/>
            </Grid>
         </Grid>
      </Box>
   );
}

export default PageContact;

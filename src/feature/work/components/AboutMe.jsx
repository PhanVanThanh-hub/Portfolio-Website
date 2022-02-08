import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
 
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import cvApi from '../../../api/cvApi';
export default function AboutMe() {
   const [image,setImage] = useState();
   useEffect(() => {
      ; (async () => {
         try {
            const res = await cvApi.getCV()
            console.log("rs:",res.data[0])
            const data = res.data[0]
            setImage(data["image"])
         } catch (error) {
            console.log("error:",error.message)
         }
      })()
   }, []) 
   return (
      <Grid container spacing={2} sx={{color:"white"}}>
         <Grid item xs={12} sx={{display:"flex",}}>
            <Avatar sx={{justifyContent:"center",width: "200px",height: "200px", border: '5px solid lightgray','@media ( max-width: 480px)':{
           display: "block",
           marginLeft: "auto",
           marginRight: "auto",
         }}} src={image}></Avatar>
         </Grid>
         <Grid item xs={12}  >
            <Typography sx={{fontWeight:"bold",letterSpacing:"0.08em",fontSize:"1.5em",
         '@media ( max-width: 480px)':{
            textAlign:"center"
         },}}>ABOUT ME</Typography>
         </Grid>
         <Grid item xs={12}>
            <Divider sx={{borderColor:"#26211e"}}/>
         </Grid>
         <Grid item xs={12}>
            <Typography sx={{fontSize:"0.9em"}}>
               Lorem ipsum dolor sit amet. consectetur adipisicing elit Non
               vel sint nii possimun unt vertatis etam velt Lorem ipum
               delor sit amet.consectetur adipisicing elin.
            </Typography>
         </Grid>
      </Grid>
   );
}

 

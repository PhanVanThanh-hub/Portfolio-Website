import React,{useEffect,useState} from 'react';
import PageAdminAbout from './page/PageAdminAbout';
import aboutApi from '../../../../api/aboutApi';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
const useStyles = makeStyles((theme) => ({
   link:{
      textDecoration: "none",
      '& .MuiButton-root':{
         margin:"0px 0px 0px 32px", textTransform: "lowercase",
         color: "#fff",fontWeight: "700",fontSize:"1.1rem",
         transition: "0.7s",
         '&:hover':{
            color:"rgba(19, 165, 229, 0.8)",
         },
      }
   }
   
}));
export default function AdminAbout(){
   const classes= useStyles()
   const [imageDefault,setImage] = useState()
   useEffect(() => {
      ; (async () => {
         try {
            const res = await aboutApi.getAbout()
            setImage(res.data[0].image)
         } catch (error) {
            console.log(error.message)
         }
      })()
   }, [])
   return(
      <div style={{height:"100vh",justifyContent:"center", background:"linear-gradient(90deg, rgba(72, 139, 100, 0.26), rgba(0, 139, 59, 0.51))"}}>
         <Link to="/admin" className={classes.link}  >
            <Button sx={{borderRadius:"50%",color:"rgba(157, 12, 202, 0.8)"}}  variant="contained">
               Back
            </Button>            
         </Link> 
          
         <PageAdminAbout  imageDefault={imageDefault}/>
      </div>
       
   );
}
 


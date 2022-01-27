import  React from 'react';
import PageContact from './page/PageAdminContact';
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
export default function AdminContact() {
   const classes= useStyles()
   return (
      <div style={{backgroundColor:"rgba(188, 117, 154, 0.09)",height:"100vh"}}>
         <Link to="/admin" className={classes.link}  >
            <Button sx={{borderRadius:"50%",color:"rgba(157, 12, 202, 0.8)"}}  variant="contained">
               Back
            </Button>            
         </Link>
         <PageContact/>
      </div>
   );
}

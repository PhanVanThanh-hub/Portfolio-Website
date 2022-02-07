import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Image from '../components/Image'; 
import Information from '../components/Information';
import useWindowPosition from '../../../../../hook/useWindowPosition';
import introApi from '../../../../../api/introApi';
import {
   useMediaQuery,
 } from "@mui/material";
const useStyles = makeStyles({
   wrapper:{
      flexDirection: "row",
      height:"100vh",
      '@media (max-width: 480px)': {
         flexDirection: "column"
      }
   },
   root:{
      padding:"50px",
      '@media ( max-width: 600px)':{
         padding:"0px 10px"
      },
   },
    
 });

function PageIntro() {
   const classes = useStyles()
   let checked = useWindowPosition('header');
   const largeScreen = useMediaQuery('(min-width:480px)');
   if(largeScreen===false){
      checked=true
   }
   const [des,setDes] = useState("")
   const [roles,setRoles] = useState([])
   const [imgAvatar , setImag] = useState("")
   useEffect(() => {
      ; (async () => {
         try {
            const res = await introApi.getRole()
            const roles=[]
            res.data.map((role)=>roles.push(role.name))

            setRoles(roles)
         } catch (error) {
            console.log(error.message)
         }
      })()
   }, [])
   useEffect(() => {
      ; (async () => {
         try {
            const res = await introApi.getProfile()
            const img = await introApi.getAvatar()
            const index=res.data[0].image
            setImag(img.data[index].image)
            setDes(res.data[0].des)
         } catch (error) {
            console.log(error.message)
         }
      })()
   }, [])
    return (
      <div>
         <Grid container  spacing={0}  direction={largeScreen?"row":"column"} 
               sx={{height:"100vh",
                  
                 '@media ( max-width: 1024px)':{
                  height:"100%"
                   },

               
               
               }} 
         alignItems="center" justifyContent="center" 
         >  
         {
            !largeScreen?
               <> 
                  <Grid item xs={6} > 
                     <Image checked={checked} avatar1={imgAvatar}/>
                  </Grid>
                  <Grid item xs={6}   className={classes.root}>
                     <Information checked={checked}  des={des} roles={roles}/>
                  </Grid>
               </>
            :
            <>
               <Grid item xs={6}   className={classes.root}>
                     
                  <Information checked={checked}  des={des} roles={roles}/>
                  
               </Grid>
               <Grid item xs={6} >
                     
                  <Image checked={checked} avatar1={imgAvatar}/>
               
               </Grid>
            </>
         }
             
             
         </Grid>
      </div>
   );
}

export default PageIntro;

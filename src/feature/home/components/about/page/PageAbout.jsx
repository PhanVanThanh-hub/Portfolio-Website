import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Image from '../components/Image';
import Content from '../components/Content';
import useWindowPosition from '../../../../../hook/useWindowPosition';
import { Collapse } from '@mui/material';
import { useMediaQuery,} from "@mui/material";
import aboutApi from '../../../../../api/aboutApi';
const useStyles = makeStyles({
 
   root:{
      padding:"50px",
      position:"relative",
      height:"100%"
   },
   cardImage:{
      height:"70vh",
      position:"relative",
   }
    
 });
function PageAbout() {
   const classes = useStyles()
   let checked = useWindowPosition('information');
   const largeScreen = useMediaQuery('(min-width:480px)');
   if(largeScreen===false){
      checked=true
   }
   const [about , setAbout] = useState("")
   const [image,setImage] = useState()
   useEffect(() => {
      ; (async () => {
         try {
            const res = await aboutApi.getAbout()
            console.log("res:",res.data)
            setAbout(res.data[0].about)
            setImage(res.data[0].image)
         } catch (error) {
            console.log(error.message)
         }
      })()
   }, [])
   return (
  
         <Grid container  spacing={1} direction={largeScreen?"row":"column"} alignItems="center" justifyContent="center"
            sx={{height:"100vh",'@media ( max-width: 480px)':{
                  height:"100%",marginTop: "50px"
              }}}
         >
            <Grid item xs={6}   className={classes.root}>
               <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}> 
                  <Image image={image}/>
               </Collapse>
            </Grid>
            <Grid item xs={6} sx={{ padding:"50px"}}>
               <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}> 
                  <Content about={about}/>
               </Collapse>
            </Grid>
         </Grid>
     
   );
}

export default PageAbout;

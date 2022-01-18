import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Title from '../components/Title';
import Content from '../components/Content';
import faqApi from '../../../../../api/faqApi';
 
function PageFAQ() {
   
   const [data,setData] = useState([])
   useEffect(() => {
      ; (async () => {
         try {
            const res = await faqApi.getAll()
            setData(res.data)
         } catch (error) {
            console.log(error.message)
         }
      })()
   }, [])
   return (
      <Box sx={{height:"100%",padding:"0px 50px"}}>
         <Grid container direction="row" justifyContent="center" alignItems="center" sx={{height:"100%",borderRadius:"12px",overflow:"hidden" }}>
            <Grid item xs={6} sx={{height:"100%"}}>
               <Title/>
            </Grid>
            <Grid item xs={6} sx={{height:"100%"}}>
               <Content data={data}/>
            </Grid>
         </Grid>
      </Box>
       
   );
}

export default PageFAQ;

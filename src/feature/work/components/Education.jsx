import React ,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import cvApi from '../../../api/cvApi';
export default function Education() {
   const [data, setData] = useState([])
   useEffect(() => {
      ; (async () => {
         try {
            const res = await cvApi.getEducation()
            const data = res.data[0]
            setData(res.data)
         } catch (error) {
            console.log("error:",error.message)
         }
      })()
   }, [])
   return (
      <Grid container spacing={2} sx={{color:"white"}}>
         <Grid item xs={12}>
            <Typography sx={{fontWeight:"bold",letterSpacing:"0.08em",fontSize:"1.5em"}}>EDUCATION</Typography>
         </Grid>
         <Grid item xs={12}>
            <Divider sx={{borderColor:"#26211e"}}/>
         </Grid>
         {data.map((data)=>
            <Grid item xs={12}>
               <Typography sx={{fontWeight:"bold"}}>{data["Title"]}</Typography>
               <Typography sx={{padding:"10px 0px",   fontFamily: "emoji"}}>
                  {data["Year"]}
               </Typography>
               <Typography sx={{fontSize:"0.9em"}}>
                  {data["Detail"]}
               </Typography>
            </Grid>
         )}
          
         
      </Grid>
   );
}

 

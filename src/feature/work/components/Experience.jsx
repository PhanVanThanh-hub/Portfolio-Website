import React,{useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import cvApi from '../../../api/cvApi';
export default function Experience() {
   const [data, setData] = useState([])
   useEffect(() => {
      ; (async () => {
         try {
            const res = await cvApi.getExperience()
            const data = res.data[0]
            setData(res.data)
            console.log("data:",data)
         } catch (error) {
            console.log("error:",error.message)
         }
      })()
   }, [])
   return (
      <Grid container spacing={2} sx={{color:"white"}}>
         <Grid item xs={12}>
            <Typography sx={{fontWeight:"bold",letterSpacing:"0.08em",fontSize:"1.5em"}}>EXPERIENCE</Typography>
         </Grid>
         <Grid item xs={12}>
            <Divider sx={{borderColor:"#26211e"}}/>
         </Grid>
         {data.map((object)=>
            <Grid item xs={12}>
               <Typography sx={{fontWeight:"bold"}}>{object["Title"]}</Typography>
               <Typography sx={{padding:"10px 0px",    fontFamily: "emoji"}}>
                  {object["Year"]}
               </Typography>
               <Typography sx={{fontSize:"0.9em"}}>
                  {object["Detail"]}
               </Typography>
            </Grid>
         )}
         
      </Grid>
   );
}

 

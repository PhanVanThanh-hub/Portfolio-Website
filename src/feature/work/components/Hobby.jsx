import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
const datas=[
   {icon:<MusicNoteIcon/>,hobby:"Music"},
   {icon:<MenuBookIcon/>,hobby:"Comic"},
   {icon:<SportsEsportsIcon/>,hobby:"Game"}
]
export default function Hobby() {
   return (
      <Grid container spacing={3} sx={{color:"white"}} alignItems="center" justifyContent="center">
         <Grid item xs={12}>
            <Divider sx={{borderColor:"#26211e"}}/>
         </Grid>
         {datas.map((data)=>
            <Grid item>
               <Grid container sx={{textAlign: "center"}}>
                  <Grid item xs={12}>
                     <Typography>{data.icon}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                     <Typography>{data.hobby}</Typography>
                  </Grid>
               </Grid>
            </Grid>
         )}
          
      </Grid>
   );
}

 

import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import Divider from '@mui/material/Divider';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
const datas=[
   {icon:<PhoneEnabledIcon/>,detail:"0816113859"},
   {icon:<EmailIcon/>,detail:"thanhphan1230@gmail.com"},
   {icon:<LocationOnIcon/>,detail:"LiênThủy-LệThủy-QuảngBình"},
   {icon:<PublicIcon/>,detail:"phanvanthanh.me"},
   {icon:<GitHubIcon/>,detail:"https://github.com/PhanVanThanh-hub"},
]
export default function Contact() {
   return (
      <Grid container spacing={1} sx={{color:"white"}}>
         {datas.map((data)=>
         <> 
            <Grid item xs={12}>
               <Grid container>
                  <Grid item>
                     <Typography>{data.icon}</Typography>
                  </Grid>
                  <Grid item sx={{paddingLeft:"30px"}}>
                     <Typography>{data.detail}</Typography>
                  </Grid>
               </Grid>
            </Grid>
            <Grid item xs={12}>
               <Divider sx={{borderColor:"#26211e"}}/>
            </Grid>
         </>
         )}
          
          
      </Grid>
   );
}

 

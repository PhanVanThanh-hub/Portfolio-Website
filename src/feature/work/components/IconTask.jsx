import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import python from '../../../static/image/cv/python.png';
import react from '../../../static/image/cv/reactjs.png';
import html from '../../../static/image/cv/html.png';
import css from '../../../static/image/cv/css.png';
import js from '../../../static/image/cv/js.png';
const datas=[
   {icon:python,tech:"Python"},
   {icon:react,tech:"React"},
   {icon:html,tech:"HTML"},
   {icon:css,tech:"CSS"},
   {icon:js,tech:"Javascript"},
]
export default function IconTask() {
   return (
      <Grid container spacing={2}  sx={{color:"white",padding:"10px",'& .MuiGrid-item':{
         paddingLeft:"0px"
      }}}  >
         {datas.map((data)=>
            <Grid item xs={6} >
               <Grid container    >
                  <Grid item xs={12} sx={{display: "flex",justifyContent: "center"}} >
                     <Avatar src={data.icon} sx={{  border: '2px solid lightgray',width:"80px",height:"80px",'& img':{
                                    width:"50%",height:"50%"
                     }}}/>
                  </Grid>
                  <Grid item xs={12} >
                     <Typography sx={{fontSize:"0.9em",textAlign:"center"}}>
                        {data.tech}
                     </Typography>
                  </Grid>
               </Grid> 
            </Grid>
         )}
          
         
      </Grid>
   );
}

 

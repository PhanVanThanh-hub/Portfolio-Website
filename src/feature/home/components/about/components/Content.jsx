import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import award from '../../../../../static/image/about/award.png';
 
function Content() {
   
   return (
      <Grid container >
         <Grid item xs={12}>
            <Typography variant="h3">About me</Typography>
         </Grid>
         <Grid item xs={12} sx={{margin:"20px 0px"}}>
            <Typography> 
               I am currently a 3rd year student at Duy Tan University. 
               I can use javascript and python languages along with frameworks for web development.
            </Typography>
         </Grid>
         {/* <Grid item xs={12}  >
            <Typography sx={{fontWeight: "300",fontFamily: "Roboto"}}>
               I am currently a 3rd year student at Duy Tan University. 
               I can use javascript and python languages along with frameworks for web development.
            </Typography>
         </Grid> */}
         <Grid item xs={12} sx={{marginTop:"50px",'@media ( max-width: 480px)':{
                        display: "none"
                    }}} >
            <Grid container  alignItems="center" justifyContent="space-between">
               <Grid item xs={4} alignItems="center">
                  <CardMedia
                     component="img"
                     src={award}
                     alt="award"
                     sx={{width: "120px",height: "120px",borderRadius: "20px",
 }}
                  />
               </Grid>
               <Grid item xs={8}>
                  <Typography sx={{fontWeight: "bold",color: "#555",marginBottom: "10px",}}>
                     International Design Awards 2021
                  </Typography>
                  <Typography sx={{fontWeight: "300"}}>
                     Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                     and fugit.
                  </Typography>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
     
   );
}

export default Content;

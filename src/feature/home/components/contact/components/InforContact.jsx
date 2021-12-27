import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
 
import address from '../../../../../static/image/contact/address.png';
import email from '../../../../../static/image/contact/email.png';
import phone from '../../../../../static/image/contact/phone.png';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
   root:{
      '& .MuiGrid-item':{
         '& div':{
            display: "flex",alignItems: "center",fontWeight: "400",width: "70%",
            '& img':{
               width: "30px",height: "30px",marginRight: "20px",
            }
         },

      }
   }
});
function InformationContact() {
   const classes = useStyles()
   return (
      <Grid container spacing={3}  direction="column"    >
         <Grid item xs={12} >
            <Typography sx={{fontSize: "60px",'@media ( max-width: 480px)':{
                           fontSize: "30px"
            }}}>
               Let's discuss your project
            </Typography>
         </Grid>
         <Grid item xs={12}>
            <Grid container spacing={2} className={classes.root} sx={{'@media ( max-width: 480px)':{
                    margin: "20px 0px",
                    width: "100%",
               }}}>
               <Grid item xs={12}>
                  <div> 
                     <img src={phone} alt=""/>
                        0816113859
                     </div >
               </Grid>
               <Grid item xs={12}>
                  <div>
                     <img src={email} alt=""/>
                        thanhphan1230@gmail.com
                     </div >
               </Grid>
               <Grid item xs={12}>
                  <div>
                     <img src={address} alt=""/>
                        LienThuy-LeThuy-QuangBinh
                     </div >
               </Grid>
            </Grid>
         </Grid>
      </Grid>
            
       
   );
}

export default InformationContact;

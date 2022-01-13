import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
   root:{
      '& .MuiGrid-item':{
         '& div':{
            display: "flex",alignItems: "center",fontWeight: "400", 
          
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
               Contact Us
            </Typography>
         </Grid>
         <Grid item xs={12}>
            <Grid container spacing={2} className={classes.root} sx={{'@media ( max-width: 480px)':{
                    margin: "20px 0px",
                    width: "100%",
               }}}>
               <Grid item xs={12}>
                  <ListItem>
                     <ListItemIcon>
                        <PhoneIcon />
                     </ListItemIcon>
                     <ListItemText primary="0816113859" />
                  </ListItem>
               </Grid>
               <Grid item xs={12}>
                  <ListItem>
                     <ListItemIcon>
                        <EmailIcon />
                     </ListItemIcon>
                     <ListItemText primary="thanhphan1230@gmail.com" />
                  </ListItem>
               </Grid>
               <Grid item xs={12}>
                  <ListItem>
                     <ListItemIcon>
                        <LocationOnIcon/>
                     </ListItemIcon>
                     <ListItemText primary="LienThuy-LeThuy-QuangBinh" />
                  </ListItem>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
            
       
   );
}

export default InformationContact;

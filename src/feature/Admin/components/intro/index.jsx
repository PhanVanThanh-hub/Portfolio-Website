import  React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PageConfirm from './page/PageConfirm';
import PageSelect from './page/PageSelect';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
const useStyles = makeStyles((theme) => ({
   link:{
      textDecoration: "none",
      '& .MuiButton-root':{
         margin:"0px 0px 0px 32px", textTransform: "lowercase",
         color: "#fff",fontWeight: "700",fontSize:"1.1rem",
         transition: "0.7s",
         '&:hover':{
            color:"rgba(19, 165, 229, 0.8)",
         },
      }
   }
   
}));
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AdminIntro() {
   const classes= useStyles();
   return (
      <Box sx={{ flexGrow: 1 ,padding:"30px"}}>
         <Link to="/admin" className={classes.link}  >
            <Button sx={{borderRadius:"50%",color:"rgba(157, 12, 202, 0.8)"}}  variant="contained">
               Back
            </Button>            
         </Link>
         <Grid container spacing={2}>    
            <Grid item xs={8}>
               <Item>
                  <PageSelect/>
               </Item>
            </Grid>
            <Grid item xs={4} sx={{height:"100%"}}>
               <Item>
                  <PageConfirm/>
               </Item>
            </Grid>
         </Grid>
      </Box>
   );
}

import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';

 
const useStyles = makeStyles({
 
   root:{
      padding:"50px",
      position:"relative",
      height:"100%",
      display: "flex",
      justifyContent: "center"
   },
   cardImage:{
      height:"70vh",
      position:"relative",
      '@media ( max-width: 480px)':{
         height: "30vh"
      },
      '@media ( max-width: 1024px)':{
         height:"100%"
      },
   }
    
 });
function Image(props) {
   const classes = useStyles()
   return (
      <div style={{ display: "flex",height:"30vh",justifyContent: "center",position:"relative"}}>
         
            {/* <Card   
               sx={{height:"70vh",position: "absolute",top: "50px",left: "50px",width:"60%",borderRadius:"30px" ,bgcolor: 'card.primary',
               '@media ( max-width: 480px)':{
                  display: "none"
              }}}>
            </Card> */}
            <Card className={classes.cardImage} sx={{width:"60%",borderRadius:"30px"  }}>
               <CardMedia
                  component="img"
                  sx={{height:"100%",width:"100%"}}
                  src={props.image} alt="Paella dish"
               />
            </Card> 
         
      </div>
   );
}

export default Image;

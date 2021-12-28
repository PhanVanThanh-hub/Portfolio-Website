import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@mui/styles';
import card from '../../../../../static/image/about/Open Peeps - Standing.png';
import Card from '@mui/material/Card';

 
const useStyles = makeStyles({
 
   root:{
      padding:"50px",
      position:"relative",
      height:"100%"
   },
   cardImage:{
      height:"70vh",
      position:"relative",
      '@media ( max-width: 480px)':{
         height: "30vh"
      }
   }
    
 });
function Image() {
   const classes = useStyles()
   return (
      <div>
         
            <Card  className={classes.cardImage}
               sx={{position: "absolute",top: "50px",left: "50px",width:"60%",borderRadius:"30px" ,background: "#333",
               '@media ( max-width: 480px)':{
                  display: "none"
              }}}>
            </Card>
            <Card className={classes.cardImage} sx={{width:"60%",borderRadius:"30px",bgcolor: 'card.primary'  }}>
               <CardMedia
                  component="img"
                  
                  src={card} alt="Paella dish"
               />
            </Card> 
         
      </div>
   );
}

export default Image;

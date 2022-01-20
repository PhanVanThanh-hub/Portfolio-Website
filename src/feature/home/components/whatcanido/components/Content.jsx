import * as React from 'react';
import { makeStyles } from '@mui/styles';
import  pepsi from '../../../../../static/image/ido/logo192.png';
const useStyles = makeStyles(() => ({
   card:{
      position: "relative",
      width: "auto",
      height: "350px",
   
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      transition: "0.5s",
      '& img':{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            maxHeight: "300px",
            pointerEvents: "none",
            transition: "0.5s",
         
      },
      '&:hover':{
 
         '& img':{
            left: "82%",
            width:"100px"
         },
         '& $circle::before':{
            background:"#fff",
            clipPath:"circle(400px at center)",
         },
         '& $content':{
            left: "0",
            opacity: "1",
            visibility: "visible",
         }
      } 
   },
   circle:{
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      borderRadius: "20px",
      overflow: "hidden",
      '&::before':{
         content: '""',
         position: "absolute",
         top: "0",
         left: "0",
         width: "100%",
         height: "100%",
         background: "#d83133",
         clipPath: "circle(120px at center)",
         transition: "0.5s",
      }
   },
   
   content:{
      position: "relative",
      width: "50%",
      left: "20px",
      padding: "20px",
      transition: "0.5s",
      opacity: "0",
      visibility: "hidden",
      '& h2':{
         color: "black",
         textTransform: "uppercase",
         fontSize:" 2em",
         lineHeight: "1em",
         marginBottom: "5px",
      },
      '& p':{
         color: "black"
      },
   },
    
}))
export default function Content(props) {
   const classes = useStyles()
   const {data} =props
   return (
      <div className={classes.card}>
         <div className={classes.circle}></div>
         <div className={classes.content}>
            <h2>{data.tech}</h2>
            <p>{data.detail}</p>
         </div>
         <img src={data.image} />
      </div>
   );
}

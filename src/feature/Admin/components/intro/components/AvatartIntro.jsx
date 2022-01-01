import  React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import avatar1 from '../../../../../static/admin/intro/Open Peeps - Avatar (1).png';
import avatar2 from '../../../../../static/admin/intro/Open Peeps - Avatar (2).png';
import avatar3 from '../../../../../static/admin/intro/Open Peeps - Avatar (3).png';
import avatar4 from '../../../../../static/admin/intro/Open Peeps - Avatar (4).png';
import avatar5 from '../../../../../static/admin/intro/Open Peeps - Avatar (5).png';
import avatar6 from '../../../../../static/admin/intro/Open Peeps - Avatar (6).png';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import {useDispatch } from 'react-redux';
import {changeAvatar} from './IntroSlice';
const image=[avatar1,avatar2,avatar3,avatar4,avatar5,avatar6]
const useStyles = makeStyles({
   root: {
      '&:hover':{
         backgroundColor:"rgba(28, 165, 141, 0.8)"
      },
   },
   choose:{
      backgroundColor:"rgba(29, 255, 0, 0.8)"
   }
 });
export default function AvatarIntro() {
   const classes= useStyles();
   const [active,setActive]=useState(0)
   const dispatch = useDispatch();
   
   const chooseCard =()=>{
      console.log("hehe:",image[active])
      const actions = changeAvatar({value:image[active]})
      dispatch(actions)
   }
   const activeCard =(index)=>{
      console.log("index:",index)
      setActive(index)
      const actions = changeAvatar({value:image[index]})
      dispatch(actions)
   }
   return (
   
      <Grid container spacing={1}>
         <Grid item xs={12}>
            <Typography sx={{fontSize:"30px",fontWeight:"500px"}}>Choose avatar for Intro</Typography> 
         </Grid>
         {image.map((img,index)=>
            <Grid item xs={3}   >
               <Card   value={index} onClick={() =>activeCard(index)} 
                  sx={{ maxWidth: 175,height:233,borderRadius:"24px" ,position: "relative" }}
                  className={ active === index ? classes.choose : classes.root}
               >
                  <CardMedia
                     component="img"
                     sx={{ position: "absolute",margin: "auto",top: "0",left: "0",right: "0",bottom: "0",}}
                     src={img}
                     alt="green iguana"
                  />
               </Card>
            </Grid>
         )}
         <Grid item xs={12}>
            <Button variant="contained" onClick={chooseCard} 
               sx={{fontWeight:"bold",borderRadius:"12px",background:"linear-gradient(90deg, #0162c8, #55e7fc)",color:"black"}}
            >
               Choose
            </Button>
         </Grid>
      </Grid>         
   );
}

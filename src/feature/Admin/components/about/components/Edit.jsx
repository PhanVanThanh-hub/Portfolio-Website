import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
const useStyles = makeStyles({
   button:{
      fontWeight:"bold",borderRadius:"12px",marginTop:"16px",
      background:"linear-gradient(90deg, #0162c8, #55e7fc)",
      color:"black",
      textTransform: "none"
   }
 
    
 });
export default function Edit(props) {
   const classes = useStyles()
   const { register, handleSubmit } = useForm();
   const [image,setImage] =useState();
   const onSubmit = (data) => {
      props.changeValue(data.about);
      props.openModel(true);
      props.changeImage(image);
   };
   const onImageChange = event => {
      if (event.target.files && event.target.files[0]) {
         let img = event.target.files[0];
        
         setImage(URL.createObjectURL(img)) 
        
      }
    };
   return (
      <form onSubmit={handleSubmit(onSubmit)}> 
         <Grid container spacing={1} alignItems="center" justifyContent="center" >
            <Grid item xs={12}>
                  <TextField
                     variant="outlined"
                     multiline
                     fullWidth
                     label="Des"
                     {...register("about")}
                     inputProps={{
                        style: {
                        height:"200px",
                        },
                     }}
                  />
            </Grid>
            <Grid item xs={12}>
               <input type="file" name="myImage" onChange={onImageChange} />
            </Grid>
            <Grid item xs={3}>
               <Button variant="contained" type="submit" className={classes.button}>
                     Confirm
               </Button>
            </Grid>
         </Grid>
      </form>
   );
}
 

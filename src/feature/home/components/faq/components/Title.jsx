import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import image from '../../../../../static/image/faq/frequently-asked-question-Elementor-1024x640.png';
const useStyles = makeStyles(() => ({
   box:{
      backgroundImage:`url(${image}) `,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width:"100%",
      height: '100%',
   }
}))
function Title() {
   const  classes=useStyles()
   
   return (
      <Box className={classes.box}>
         das
      </Box>
   );
}

export default Title;

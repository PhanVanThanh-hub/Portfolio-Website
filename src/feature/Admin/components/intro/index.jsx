import  React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PageConfirm from './page/PageConfirm';
import PageSelect from './page/PageSelect';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AdminIntro() {
   return (
      <Box sx={{ flexGrow: 1 ,padding:"30px"}}>
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

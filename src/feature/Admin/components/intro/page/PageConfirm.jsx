import  React from 'react';
import Grid from '@mui/material/Grid';
import Information from '../../../../home/components/intro/components/Information';
import Image from '../../../../home/components/intro/components/Image';
import { FamilyRestroomRounded } from '@mui/icons-material';
import { useSelector } from 'react-redux';
export default function PageConfirm() {
   const chipRedux = useSelector(state => state.intro.value.chip)
   const des=useSelector(state => state.intro.value.des)
   const avatar1 = useSelector(state => state.intro.value.avatar)
    
   const name="Phan Van Thanh"
  
  
   return (
      <Grid container  spacing={0}  direction="column" sx={{height:"100%"}}
         alignItems="center" justifyContent="center" 
      >
         <Grid item xs={6}   sx={{ padding:"50px",}}>
            <Information checked={FamilyRestroomRounded} name={name} des={des} roles={chipRedux}/>
         </Grid>
         <Grid item xs={6} >        
            <Image checked={true} avatar1={avatar1}/>
         </Grid>
      </Grid>
                
   );
}

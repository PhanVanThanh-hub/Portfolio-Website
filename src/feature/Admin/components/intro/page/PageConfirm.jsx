import  React,{useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Information from '../../../../home/components/intro/components/Information';
import Image from '../../../../home/components/intro/components/Image';
import { FamilyRestroomRounded } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import {setDes,setChip,setAvatar} from '../components/IntroSlice';
import {useDispatch } from 'react-redux';
import introApi from '../../../../../api/introApi';
export default function PageConfirm() {
   const chipRedux = useSelector(state => state.intro.value.chip)
   const des=useSelector(state => state.intro.value.des)
   const avatar1 = useSelector(state => state.intro.value.avatar)
   const dispatch = useDispatch();
   const name="Phan Van Thanh"
   useEffect(() => {
      ; (async () => {
         try {
            const res = await introApi.getProfile()
            const actions = setDes({value:res.data[0].des})
            dispatch(actions)
            const img = await introApi.getAvatar()
            const index=res.data[0].image
            const actions1= setAvatar({value:img.data[index].image})
            dispatch(actions1)
         } catch (error) {
            console.log(error.message)
         }
      })()
   }, [])
   useEffect(() => {
      ; (async () => {
         try {
            const res = await introApi.getRole()
            const actions = setChip({value:res.data })
            dispatch(actions)
         } catch (error) {
            console.log(error.message)
         }
      })()
   }, [])
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

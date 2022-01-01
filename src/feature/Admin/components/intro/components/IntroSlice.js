import { createSlice } from '@reduxjs/toolkit'
import avatar1 from '../../../../../static/admin/intro/Open Peeps - Avatar (1).png';
export const introSlice = createSlice({
   name: 'intro',
   initialState: {
      value: 
         {chip:['Angular' ,'jQuery','Polymer','React','Vue.js',],name:"PhanVanThanh",avatar:avatar1,
         des:"I design and develop services for customers of all sizes,specializing in creating stylish, modern websites, web services andonline stores."}
      
   },
   reducers: {
      addChip(state, action) {
          
         const value = action.payload.value
         const index = state.value.chip.indexOf(value);
         if (index === -1) {
            state.value.chip.push(value)
         }
      },
      deleteChip(state,action){
         const value = action.payload.value
         const index = state.value.chip.indexOf(value);
         if (index > -1) {
            state.value.chip.splice(index, 1);
         }
      },
      updateDes(state,action){
         const value = action.payload.value
         state.value.des=value
      },
      changeAvatar(state,action){
         const value = action.payload.value
         state.value.avatar=value
      }
   }
})

const { actions, reducer } = introSlice
export const { addChip,deleteChip,updateDes,changeAvatar} = actions
export default reducer
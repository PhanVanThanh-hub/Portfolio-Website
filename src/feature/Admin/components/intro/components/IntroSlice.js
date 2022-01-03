import { createSlice } from '@reduxjs/toolkit'


export const introSlice = createSlice({
   name: 'intro',
   initialState: {
      
      value: 
         {chip:[],name:"PhanVanThanh",avatar:"",des:""}
      
   },
   reducers: {
      setAvatar(state,action){
         state.value.avatar=action.payload.value
      },
      setChip(state,action){
         const chip=action.payload.value
         chip.map((role)=>
            state.value.chip.push(role.name)
         )
      },
      setDes(state,action){
         console.log("action:",action.payload.value)
         state.value.des=action.payload.value
          
      },
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
export const { addChip,deleteChip,updateDes,changeAvatar,setChip,setDes,setAvatar} = actions
export default reducer
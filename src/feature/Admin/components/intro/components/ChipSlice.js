import { createSlice } from '@reduxjs/toolkit'

export const chipSlice = createSlice({
   name: 'chip',
   initialState: {
      value: ['Angular' ,'jQuery','Polymer','React','Vue.js',]
   },
   reducers: {
      addChip(state, action) {
          
         const value = action.payload.value
         const index = state.value.indexOf(value);
         console.log("index",index)
         if (index === -1) {
            state.value.push(value)
         }
      },
      deleteChip(state,action){
         const value = action.payload.value
         const index = state.value.indexOf(value);
         if (index > -1) {
            state.value.splice(index, 1);
         }
      }
   }
})

const { actions, reducer } = chipSlice
export const { addChip,deleteChip} = actions
export default reducer
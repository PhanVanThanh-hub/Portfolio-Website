import { createSlice } from '@reduxjs/toolkit'


export const EducationSlice = createSlice({
   name: 'education',
   initialState: {
      show: false,
     
   },
   reducers: {
      showAddModel(state){
         state.show =true
      },
      hideAddModel(state){
         state.show =false
      },
  
      
   }
})

const { actions, reducer } = EducationSlice
export const { showAddModel,hideAddModel} = actions
export default reducer
import { createSlice } from '@reduxjs/toolkit'


export const ExperienceSlice = createSlice({
   name: 'experience',
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

const { actions, reducer } = ExperienceSlice
export const { showAddModel,hideAddModel} = actions
export default reducer
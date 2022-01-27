import { createSlice } from '@reduxjs/toolkit'


export const AdminSlice = createSlice({
   name: 'admin',
   initialState: {
      value: 1,
     
   },
   reducers: {
      reloadPage(state){
         state.value +=1
      },
  
      
   }
})

const { actions, reducer } = AdminSlice
export const { reloadPage} = actions
export default reducer
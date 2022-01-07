import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
   name: 'product',
   initialState: {
      value: 1
   },
   reducers: {
      reloadPage(state,action){
         state.value +=1
      },
      
   }
})

const { actions, reducer } = productSlice
export const { reloadPage} = actions
export default reducer
import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
   name: 'product',
   initialState: {
      value: 1,
      addProduct:false,
   },
   reducers: {
      reloadPage(state){
         state.value +=1
      },
      ShowAddProduct(state){
         state.addProduct=true;
      },
      HideAddProduct(state){
         state.addProduct=false;
      },
      
   }
})

const { actions, reducer } = productSlice
export const { reloadPage,ShowAddProduct,HideAddProduct} = actions
export default reducer
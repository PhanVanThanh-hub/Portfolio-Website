import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
   name: 'product',
   initialState: {
      value: 1,
      addProduct:false,
      findProduct:""
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
      SetValueFindProduct(state,action){
         state.findProduct=action.payload
      },
      
   }
})

const { actions, reducer } = productSlice
export const { reloadPage,ShowAddProduct,HideAddProduct,SetValueFindProduct} = actions
export default reducer
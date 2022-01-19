import { createSlice } from '@reduxjs/toolkit'


export const FAQSlice = createSlice({
   name: 'faq',
   initialState: {
      value: 1,
      findQuestion:"",
      addFAQ:false,
      success:false,
   },
   reducers: {
      reloadPage(state){
         state.value +=1
      },
      ShowAddFAQ(state){
         state.addFAQ=true;
      },
      HideAddFAQ(state){
         state.addFAQ=false;
      },
      SetValueFindQuestion(state,action){
         state.findQuestion=action.payload
      },
      SuccessFAQ(state){
         state.success = true;
      },
      
   }
})

const { actions, reducer } = FAQSlice
export const { reloadPage,ShowAddFAQ,HideAddFAQ,SetValueFindQuestion,SuccessFAQ} = actions
export default reducer
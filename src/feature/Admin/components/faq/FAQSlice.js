import { createSlice } from '@reduxjs/toolkit'


export const FAQSlice = createSlice({
   name: 'faq',
   initialState: {
      value: 1,
      findQuestion:"",
      addFAQ:false,
      success:false,
      page:{page:1}
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
      ChangePageFAQ(state,action){
         console.log("action:",action.payload)
         state.page = action.payload
      }
      
   }
})

const { actions, reducer } = FAQSlice
export const { reloadPage,ShowAddFAQ,HideAddFAQ,SetValueFindQuestion,SuccessFAQ,ChangePageFAQ} = actions
export default reducer
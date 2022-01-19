import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../components/UI/themeSlice'
import authReducer from '../feature/Auth/AuthSlice'
import introSlice from '../feature/Admin/components/intro/components/IntroSlice';
import productSlice from '../feature/Admin/components/product/ProductSlice';
import FAQSlice from '../feature/Admin/components/faq/FAQSlice';
const rootReducer  = {
  mode: themeReducer,
  auth: authReducer,
  intro:introSlice,
  product:productSlice,
  faq:FAQSlice
}

const store = configureStore({
  reducer: rootReducer,
})


export default store
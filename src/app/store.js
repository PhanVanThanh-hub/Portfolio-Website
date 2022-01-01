import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../components/UI/themeSlice'
import authReducer from '../feature/Auth/AuthSlice'
import introSlice from '../feature/Admin/components/intro/components/IntroSlice';
const rootReducer  = {
  mode: themeReducer,
  auth: authReducer,
  intro:introSlice,
}

const store = configureStore({
  reducer: rootReducer,
})


export default store
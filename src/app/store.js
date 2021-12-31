import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../components/UI/themeSlice'
import authReducer from '../feature/Auth/AuthSlice'
import chipSlice from '../feature/Admin/components/intro/components/ChipSlice';
const rootReducer  = {
  mode: themeReducer,
  auth: authReducer,
  chip:chipSlice,
}

const store = configureStore({
  reducer: rootReducer,
})


export default store
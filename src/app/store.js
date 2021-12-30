import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../components/UI/themeSlice'
import authReducer from '../feature/Auth/AuthSlice'
const rootReducer  = {
  mode: themeReducer,
  auth: authReducer,
}

const store = configureStore({
  reducer: rootReducer,
})


export default store
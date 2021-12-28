import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../components/UI/themeSlice'

const rootReducer  = {
    mode: themeReducer,
}

const store = configureStore({
  reducer: rootReducer,
})


export default store
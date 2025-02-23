import { configureStore } from '@reduxjs/toolkit'
import routerReducer from './routerSlice/routerSlice'
import terminReducer from './terminSlice/terminSlice'
import authReducer from './authSlice/authSlice'

export const store = configureStore({
  reducer: {
    router: routerReducer,
    termin: terminReducer,
    auth: authReducer,
  },
})
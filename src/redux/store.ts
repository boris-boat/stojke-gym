import { configureStore } from '@reduxjs/toolkit'
import routerReducer from './routerSlice/routerSlice'

export const store = configureStore({
  reducer: {
    router: routerReducer,
  },
})
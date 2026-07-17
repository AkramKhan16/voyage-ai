import { configureStore } from '@reduxjs/toolkit'
import tripReducer from './slices/tripSlice'
export default configureStore({
  reducer: {
    storeTripDetails:tripReducer
  },
})
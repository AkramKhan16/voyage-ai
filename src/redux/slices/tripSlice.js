import { createSlice } from '@reduxjs/toolkit'

export const tripSlice = createSlice({
  name: 'tripDetails',
  initialState: {
    tripDetails:{}
  },
  
  reducers: {
    addTripDetails:(state,action)=>{
        state.tripDetails=action.payload
    }
  },
})

export const { addTripDetails  } = tripSlice.actions

export default tripSlice.reducer
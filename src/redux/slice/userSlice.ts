import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

// Define a type for the slice state
interface UserState {
  value: number
}

// Define the initial state using that type
const initialState: UserState = {
  value: 0,
}

export const userSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { incrementByAmount } = userSlice.actions

export default userSlice.reducer

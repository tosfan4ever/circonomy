import { createSlice} from '@reduxjs/toolkit'

export const toggleDrawerSlice = createSlice({
  name: 'toggleDrawer',
  initialState: {
    // toggle: false
    toggle: false
  },
  reducers: {
    toggleDrawer: state => {
      state.toggle = !state.toggle
    }
  }
})

export const { toggleDrawer } = toggleDrawerSlice.actions
export default toggleDrawerSlice.reducer
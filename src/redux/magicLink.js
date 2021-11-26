import { createSlice} from '@reduxjs/toolkit'

export const magicLinkSlice = createSlice({
  name: 'magicLink',
  initialState: {
    isNotification: false
  },
  reducers: {
    notification: state => {
      state.isNotification = !state.isNotification
    }
  }
})

export const { notification } = magicLinkSlice.actions
export default magicLinkSlice.reducer
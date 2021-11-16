import { configureStore } from '@reduxjs/toolkit'
import toggleDrawerReducer from './toggleDrawer'

const store = configureStore({
  reducer: {
    toggle: toggleDrawerReducer,

  },

})

console.log(store.getState())
// {value: 0}

export default store
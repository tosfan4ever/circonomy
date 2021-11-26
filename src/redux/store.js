import { configureStore } from '@reduxjs/toolkit'
import toggleDrawerReducer from './toggleDrawer'
import magicLinkReducer from './magicLink'

const store = configureStore({
  reducer: {
    toggle: toggleDrawerReducer,
    magicLink: magicLinkReducer,

  },

})

console.log(store.getState())
// {value: 0}

export default store
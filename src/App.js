import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {toggleDrawer} from './redux/toggleDrawer'

import Home from './pages/Home'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import EnterBazaar from './pages/EnterBazaar'
import EngageCircles from './pages/EngageCircles'
import AppHeader from './components/layout/Header'
import AppDrawer from './components/layout/Drawer'
import ExploreCircles from './pages/ExploreCircles'

import 'antd/dist/antd.css'



function App() {
  const { toggle } = useSelector(state => state.toggle)
  const dispatch = useDispatch()
  const appLinks = [
    { link: '/explore-circles', title: 'Explore Circles' },
    { link: '/enter-bazaar', title: 'Enter Bazaar' },
    { link: '/engage-circles', title: 'Engage Circle' }
  ]

  return (

    <Router>
      <AppHeader appLinks={appLinks}/>
      <AppDrawer appLinks={appLinks} isToggle={toggle}/>
      <label className="menu-icon" htmlFor="check">
        <input onClick={() => dispatch(toggleDrawer())} type="checkbox" id="check"/>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore-circles' element={<ExploreCircles/>}/>
        <Route path='/engage-circles' element={<EngageCircles/>}/>
        <Route path='/enter-bazaar' element={<EnterBazaar/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App

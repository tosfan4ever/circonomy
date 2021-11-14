import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppHeader from './components/layout/Header'
import AppDrawer from './components/layout/Drawer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import 'antd/dist/antd.css'
import './assets/css/style.css'

function App() {

  const [toggle, setToggle] = useState(false)
  const appLinks = [
    { link: '/explore-circles', title: 'Explore Circles' },
    { link: '/enter-bazaar', title: 'Enter Bazaar' },
    { link: '/engage-circle', title: 'Engage Circle' }
  ]
  const toggleDrawer = () => {
    setToggle(!toggle)
  }

  return (

    <Router>
      <AppHeader appLinks={appLinks}/>
      <AppDrawer appLinks={appLinks} isToggle={toggle}/>
      <label className="menu-icon" htmlFor="check">
        <input onClick={toggleDrawer} type="checkbox" id="check"/>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App

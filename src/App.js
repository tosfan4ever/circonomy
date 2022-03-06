import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { UserContext } from './context/userContext'
import { checkUser } from './services/magic'

import { toggleDrawer } from './redux/toggleDrawer'

import Test from './pages/Test'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import MagicLink from './pages/MagicLink'
import OnBoarding from './pages/OnBoarding'
import EngageCircles from './pages/EngageCircles'
import AppHeader from './components/layout/Header'
import AppDrawer from './components/layout/Drawer'
import ActivateCircle from './pages/ActivateCircle'
import ExploreCircles from './pages/ExploreCircles'
import EnterCircommerce from './pages/EnterCircommerce'

// import PrivateRoute from './components/PrivateRoute';

// import Dashboard from './components/Dashboard'

import 'antd/dist/antd.css'



function App() {
  const { toggle } = useSelector(state => state.toggle)
  const dispatch = useDispatch()
  const appLinks = [
    { link: '/explore-circles', title: 'Explore Circles' },
    { link: '/enter-circommerce', title: 'Enter Circommerce' },
    { link: '/engage-circonomy', title: 'Engage Circonomy' }
  ]

  const [user, setUser] = useState({ isLoggedIn: null, email: '' })
  const [loading, setLoading] = useState()

  useEffect(() => {
    const validateUser = async () => {
      setLoading(true);
      try {
        await checkUser(setUser);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    validateUser();

  }, [user.isLoggedIn]);

  if (loading) {
    // return <h4>Loading ...</h4>
    console.log('loading')
  }

  function getUser (email) {
    setUser({email, isLoggedIn: true})
  }


  return (
    <UserContext.Provider value={{user, getUser}}>
      <Router>
        <AppHeader appLinks={appLinks}/>
          <AppDrawer appLinks={appLinks} isToggle={toggle}/>
          <label className="menu-icon" htmlFor="check">
            <input onClick={() => dispatch(toggleDrawer())} type="checkbox" id="check"/>
            <span className="Menu"></span>
            <span className="Menu"></span>
            <span className="Menu"></span>
          </label>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/explore-circles' element={<ExploreCircles/>}/>
            <Route path='/engage-circonomy' element={<EngageCircles/>}/>
            <Route path='/enter-circommerce' element={<EnterCircommerce/>}/>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/magic-link' element={<MagicLink/>}/>
            <Route path='/activate-circle' element={<ActivateCircle/>}/>
            <Route path='/onboarding' element={<OnBoarding/>}/>
            <Route path='/test' element={<Test/>}/>
            {/*<PrivateRoute path="/dashboard" element={Dashboard}/>*/}
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
      </Router>
    </UserContext.Provider>
  )
}

export default App

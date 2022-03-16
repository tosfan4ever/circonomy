import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { toggleDrawer } from '../redux/toggleDrawer'

import Hero from '../components/Hero'
import Intro from '../components/Intro'
import AboutCirconomy from '../components/AboutCirconomy'

const Home = () => {
  let location = useLocation()
  const { toggle } = useSelector(state => state.toggle)
  const dispatch = useDispatch()

  useEffect(() => {
    if (toggle) {
      dispatch(toggleDrawer())
    }
  }, [location])

  return (
    <>
      <Hero />
      <Intro />
      <AboutCirconomy />
    </>
  )
}

export default Home;

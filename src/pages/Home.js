import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { toggleDrawer } from '../redux/toggleDrawer'

import Hero from '../components/Hero'

import hero from '../assets/img/hero-bkg.svg'

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
      <Hero>
        {/*<img style={{width: '100%'}} src={hero} alt=""/>*/}
      </Hero>
    </>
  )
}

export default Home;

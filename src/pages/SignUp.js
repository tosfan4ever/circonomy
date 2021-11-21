import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { toggleDrawer } from '../redux/toggleDrawer'

import Register from '../components/SignUp'

const SignUp = () => {
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
      <Register>
        {/*<img style={{width: '100%'}} src={hero} alt=""/>*/}
      </Register>
    </>
  )
}

export default SignUp;

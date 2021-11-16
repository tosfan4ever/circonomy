import { useEffect }  from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {toggleDrawer} from '../redux/toggleDrawer'

const EnterBazaar = () => {
  let location = useLocation()
  const { toggle } = useSelector(state => state.toggle)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toggleDrawer())
  }, [location])

  return (
    <div>Enter Bazaar</div>
  )
}

export default EnterBazaar;

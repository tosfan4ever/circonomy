import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer } from '../redux/toggleDrawer'

import MagicL from '../components/MagicLink'

const MagicLink = () => {
  const [isMagicLinkNoti, setIsMagicLinkNoti] = useState(false)
  const location = useLocation()
  const { toggle } = useSelector(state => state.toggle)
  const dispatch = useDispatch()

  useEffect(() => {
    if (toggle) {
      dispatch(toggleDrawer())
    }
  }, [location])

  return (
    <>
      {isMagicLinkNoti ? <h1>Notification</h1> : <MagicL /> }

    </>
  )
}

export default MagicLink;

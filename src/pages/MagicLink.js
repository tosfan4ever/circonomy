import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer } from '../redux/toggleDrawer'

import MagicL from '../components/MagicLink'
import MagicLinkNoti from '../components/MagicLinkNoti'

const MagicLink = () => {
  const location = useLocation()
  const { toggle } = useSelector(state => state.toggle)
  const { isNotification } = useSelector(state => state.magicLink)
  const dispatch = useDispatch()

  useEffect(() => {
    if (toggle) {
      dispatch(toggleDrawer())
    }
  }, [location])

  return (
    <>
      {isNotification ? <MagicLinkNoti /> : <MagicL /> }

    </>
  )
}

export default MagicLink;

import { useEffect }  from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {toggleDrawer} from '../redux/toggleDrawer'

import UnderConstruction from '../components/UnderConstruction'
import {Wrapper} from '../components/PagesStyles/EnterCircommerce.styles'

const text = 'We intend for our marketplace will provide you access to' +
  ' a network of 3D printing service providers for whom you can sell your recycled plastic' +
  ' as well as of course a peer-to-peer marketplace.'

const EnterCircommerce = () => {
  let location = useLocation()
  const { toggle } = useSelector(state => state.toggle)
  const dispatch = useDispatch()

  useEffect(() => {
    if (toggle) {
      dispatch(toggleDrawer())
    }
  }, [location])

  return (
    <Wrapper>
      <UnderConstruction text={text} />
    </Wrapper>
  )
}

export default EnterCircommerce;

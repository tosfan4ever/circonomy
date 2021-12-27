import { useState, useEffect, useContext } from 'react'
import { message } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer } from '../redux/toggleDrawer'
import {UserContext} from '../context/userContext'

import Onboarding1 from '../components/Onboarding1'
import Onboarding2 from '../components/Onboarding2'
import Onboarding3 from '../components/Onboarding3'
import Onboarding4 from '../components/Onboarding4'
import Onboarding5 from '../components/Onboarding5'
import Onboarding6 from '../components/Onboarding6'

import Onboarding7 from '../components/Onboarding7'
import { Wrapper, Buttons, Button, BackButton } from '../components/Onboarding/Onboarding.styles'

const Onboarding = () => {

  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const location = useLocation()
  const { toggle } = useSelector(state => state.toggle)
  const dispatch = useDispatch()

  const [current, setCurrent] = useState(0)
  const x =  {
    width: '50%',
    margin: '0 auto'
  }
  const centerButton = () => {
    if (current === 4) {
      return {
        width: '50%',
        margin: '0 auto',
        position: 'relative'
      }
    }
  }

  const next = () => {
    setCurrent(current + 1)
    centerButton()
  }

  const prev = () => {
    setCurrent(current - 1)
    centerButton()
  }

  useEffect(() => {
    if (!user.email) {
      message.error('Login to start a Circle')
      navigate('/sign-up')
    }
    if (toggle) {
      dispatch(toggleDrawer())
    }
  }, [location])

  return (

    // <UserContext.Consumer>
    //
    //   {value =>
        <Wrapper>
          { current === 0 && (
            <Onboarding1 />
          )}
          { current === 1 && (
            <Onboarding2 />
          )}
          { current === 2 && (
            <Onboarding3 />
          )}
          { current === 3 && (
            <Onboarding4 />
          )}
          { current === 4 && (
            <Onboarding5 />
          )}
          { current === 5 && (
            <Onboarding6 />
          )}
          { current === 6 && (
            <Onboarding7 />
          )}

          <Buttons style={x}>
            { current > 0 && (
              <BackButton border="#FECE4E" onClick={() => prev()}>
                Back
              </BackButton>
            )}
            { current < 6 && (
              <Button border="#FECE4E" onClick={() => next()}>
                Next
              </Button>
            )}
            { current === 6 && (
              <Button border="#FECE4E" onClick={() => message.success('Processing complete!')}>
                Finish
              </Button>
            )}

          </Buttons>
        </Wrapper>
    //   }
    //
    // </UserContext.Consumer>
  )
}

export default Onboarding;

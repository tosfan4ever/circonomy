import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect} from 'react'
import { toggleDrawer } from '../redux/toggleDrawer'

import Onboarding1 from '../components/Onboarding1'
import {Button} from "../components/Onboarding1/Onboarding1.styles";
import {UserContext} from "../context/userContext";

const Onboarding = () => {
  // const { email } = useContext(UserContext);
  let location = useLocation()
  const { toggle } = useSelector(state => state.toggle)
  const dispatch = useDispatch()

  useEffect(() => {
    if (toggle) {
      dispatch(toggleDrawer())
    }
  }, [location])

  return (

    <UserContext.Consumer>

      {/*<>*/}
      {/*  <Onboarding1/>*/}
      {/*  <Button border="#FECE4E">Next</Button>*/}
      {/*</>*/}

      {value =>
        <>
          <Onboarding1/>
          <Button border="#FECE4E">Next</Button>
        </>
      }

    </UserContext.Consumer>
  )
}

export default Onboarding;

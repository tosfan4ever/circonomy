import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer } from '../../redux/toggleDrawer'
import mailSent from '../../assets/img/mail_sent.svg'

import {
  Wrapper,
  Content,
  Image,
  Heading,
  Text,
  Button
} from './MagicLinkNoti.styles'


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
    <Wrapper>
      <Content>
        <Image src={mailSent}/>
        <Heading>Magic Link Sent</Heading>
        <Text>
          We have sent an email to john@doe.com with a single use magic link.
        </Text>
        <Text>
          Please check your inbox and spam/bulk folder and click the link in the email to continue.
        </Text>
        <Text>Did not get the email?</Text>
        <Button border="#FECE4E">Send Magic Link!</Button>
        <small>The magic link will be expired in 120 seconds</small>
      </Content>
    </Wrapper>
  )
}

export default SignUp

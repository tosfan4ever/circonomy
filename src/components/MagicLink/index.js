import { Input } from 'antd'
import { notification } from '../../redux/magicLink'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  Wrapper,
  Content,
  WelcomeBack,
  MagicLinkWrapper,
  Heading,
  Text,
  Button
} from './MagicLink.styles'


const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signUp = () => {
    navigate('/sign-up')
  }

  return (
    <Wrapper>
      <Content>
        <MagicLinkWrapper>
          <Heading>Sign in to Circonomy</Heading>
          <Text>Get a magic link to sign in instantly! No <br/> need for a password at all!</Text>
          <Input style={{marginBottom: '3px'}} placeholder='Email Address' />
          <Button border="#FECE4E" onClick={() => dispatch(notification())}>Send Magic Link!</Button>
        </MagicLinkWrapper>
        <WelcomeBack>
          <Heading>Hi Friends!</Heading>
          <Text>Enter your personal details and <br/> start your recycle journey with us!</Text>
          <Button onClick={signUp} style={{marginTop: '70px'}} border="#333">Sign Up</Button>
        </WelcomeBack>
      </Content>
    </Wrapper>
  )
}

export default SignUp

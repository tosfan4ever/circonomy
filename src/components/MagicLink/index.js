import { Input } from 'antd'

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
  const submitForm = () => {
    // alert('here')
  }


  return (
  <Wrapper>
    <Content>
      <MagicLinkWrapper>
        <Heading>Sign in to Circonomy</Heading>
        <Text>Get a magic link to sign in instantly! No <br/> need for a password at all!</Text>
        <Input style={{marginBottom: '3px'}} placeholder='Email Address' />
        <Button border="#FECE4E" onClick={submitForm}>Send Magic Link!</Button>
      </MagicLinkWrapper>
      <WelcomeBack>
        <Heading>Hi Friends!</Heading>
        <Text>Enter your personal details and <br/> start your recycle journey with us!</Text>
        <Button style={{marginTop: '70px'}} border="#333" onClick={submitForm}>Sign Up</Button>
      </WelcomeBack>
    </Content>
  </Wrapper>
)}

export default SignUp

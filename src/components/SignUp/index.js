import { Input } from 'antd'

import {
  Wrapper,
  Content,
  WelcomeBack,
  SignUpWrapper,
  Heading,
  Text,
  Button
} from './SignUp.styles'

const SignUp = () => {
  const submitForm = () => {
    // alert('here')
  }


  return (
  <Wrapper>
    <Content>
      <WelcomeBack>
        <Heading>Welcome back!</Heading>
        <Text>To keep connected with us please enter your email!</Text>
        <Button border="#fefefe" onClick={submitForm}>Login</Button>
      </WelcomeBack>
      <SignUpWrapper>
        <Heading>Create Account!</Heading>

        <Input style={{marginBottom: '3px'}} placeholder='First Name' />
        <Input style={{marginBottom: '3px'}} placeholder='Last Name' />
        <Input style={{marginBottom: '3px'}} type='email' placeholder='Email Address'/>
        <Button border="#FECE4E" onClick={submitForm}>Sign Up</Button>
      </SignUpWrapper>
    </Content>
  </Wrapper>
)}

export default SignUp

import { Input } from 'antd'

import {
  Wrapper,
  Heading,
  Text,
  Button
} from './MagicLinkNoti.styles'


const SignUp = () => {




  return (
  <Wrapper>
    <Heading>Magic Link Sent</Heading>
    <Text>Get a magic link to sign in instantly! No <br/> need for a password at all!</Text>
    <Input style={{marginBottom: '3px'}} placeholder='Email Address' />
    <Button border="#FECE4E" >Send Magic Link!</Button>
  </Wrapper>
)}

export default SignUp

import { Wrapper, Content, WelcomeBack, Register, Heading, Text } from './SignUp.styles'

const SignUp = () => (
  <Wrapper>
    <Content>
      <WelcomeBack>
        <h1>Welcome back!</h1>
      </WelcomeBack>
      <Register>
        <Heading>Create Account!</Heading>
        <Text>To keep connected with us <br/> please enter your email!</Text>
      </Register>
    </Content>
  </Wrapper>
)

export default SignUp

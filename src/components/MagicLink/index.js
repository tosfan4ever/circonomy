import React, { useContext, useState } from 'react'
import { Input, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/userContext'
import { loginUser } from '../../services/magic'
import Axios from '../../services/api'

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

  const antIcon = <LoadingOutlined style={{ fontSize: 20, color: '#333' }} spin />
  const { getUser } = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState('')
  const [error, setError] = useState(null)

  // const dispatch = useDispatch()
  const navigate = useNavigate()

  const signUp = () => {
    navigate('/sign-up')
  }

  const handleChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    if (!email) {
      setLoading(false)
      setError('Email is Invalid')
      return
    }
    try {

      await loginUser(email)
      getUser(email)
      setLoading(false)
      saveEmail(email)
      navigate('/onboarding')
    } catch (err) {
      setError('Unable to log in')
      setLoading(false)
      console.error(err)
      console.error(error)
    }
  }

  async function saveEmail(email) {
    const res = await Axios.post('auth/register', { email })
    console.log(res)
  }



  return (
    <Wrapper>
      <Content>
        <MagicLinkWrapper>
          <Heading>Sign in to Circonomy</Heading>
          <Text>Get a magic link to sign in instantly! No <br/> need for a password at all!</Text>
          <Input onChange={ handleChange } style={{marginBottom: '3px'}} placeholder='Email Address' />
          <Button border="#FECE4E" onClick={handleSubmit}>{ loading ? <Spin indicator={antIcon} /> : 'Send Magic Link!'}</Button>
          {/*<Button border="#FECE4E" onClick={() => dispatch(notification())}>Send Magic Link!</Button>*/}
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

// Obi Nwere Ego - Greater than Obi Cubana
//
// Different sets of people identify with me with different name.
//
//   To my guys back in the days of FGC Ph, I was known by Cejo

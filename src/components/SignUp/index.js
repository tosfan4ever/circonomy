import { useState } from 'react'
import { Input, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import {
  Wrapper,
  Content,
  WelcomeBack,
  SignUpWrapper,
  Heading,
  Text,
  Button
} from './SignUp.styles'
import axios from "axios";


const SignUp = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const login = () => {
    navigate('/magic-link')
  }
  const signUp = () => {
    setLoading(true)
    axios
      .post('http://localhost:8000/api/auth/register', {
        first_name: firstName,
        last_name: lastName,
        email: email
      })
      .then((response) => {
        setLoading(false)
        console.log(response)
        // setPost(response.data);
      });
  }

  const getFirstName = e => {
    setFirstName(e.target.value)
  }

  const getLastName = e => {
    setLastName(e.target.value)
  }

  const getEmail = e => {
    setEmail(e.target.value)
  }

  return (
  <Wrapper>
    <Content>
      <WelcomeBack>
        <Heading>Welcome back!</Heading>
        <Text>To keep connected with us please enter your email!</Text>
        <Button border="#fefefe" onClick={login}>Login</Button>
      </WelcomeBack>
      <SignUpWrapper>
        <Heading>Create Account!</Heading>

        <Input onChange={getFirstName} style={{marginBottom: '3px'}} placeholder='First Name' />
        <Input onChange={getLastName} style={{marginBottom: '3px'}} placeholder='Last Name' />
        <Input onChange={getEmail} style={{marginBottom: '3px'}} type='email' placeholder='Email Address'/>
        <Button border="#FECE4E" onClick={signUp}>{ loading ? <Spin indicator={antIcon} /> :
          'Sign Up'
        }</Button>
      </SignUpWrapper>
    </Content>
  </Wrapper>
)}

export default SignUp

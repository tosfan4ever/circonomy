// import { useState } from 'react'
import { Input } from 'antd'


import {
  Wrapper,
  Form,
  Heading
} from './Onboarding4.styles'


const Onboarding4 = () => {


  return (
    <Wrapper>
      <Form>
        <Heading>Setup your community profile [optional]</Heading>
        <Input style={{marginBottom: '10px'}} placeholder="Username" />
        <Input style={{marginBottom: '10px'}} placeholder="Full name" />
        <Input style={{marginBottom: '10px'}} placeholder="Address" />
      </Form>
    </Wrapper>
  )
}

export default Onboarding4

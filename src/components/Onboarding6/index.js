// import { useState } from 'react'
import { Input } from 'antd'

import {
  Wrapper,
  Form,
  Heading
} from './Onboarding6.styles'


const Onboarding6 = () => {


  return (
    <Wrapper>
      <Form>
        <Heading>Share your social proof here</Heading>
        <Input style={{ marginBottom: '8px' }} placeholder="Facebook" />
        <Input style={{ marginBottom: '8px' }} placeholder="Instagram" />
        <Input style={{ marginBottom: '8px' }} placeholder="Twitter" />
        <Input style={{ marginBottom: '8px' }} placeholder="Linkedin" />
        <Input style={{ marginBottom: '8px' }} placeholder="Other" />
      </Form>
    </Wrapper>
  )
}

export default Onboarding6

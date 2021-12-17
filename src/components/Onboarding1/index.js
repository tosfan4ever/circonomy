import { useState } from 'react'
import { Radio, Input, Space } from 'antd'

import onboarding1 from '../../assets/img/onboarding1.svg'

import {
  Wrapper,
  Form,
  Img,
  Heading
} from './Onboarding1.styles'


const Onboarding1 = () => {
  const [amount, setAmount] = useState(0)

  const  getValue = e => {
    console.log('radio checked', e.target.value);
    setAmount(e.target.value)
  };

  return (
    <Wrapper>
      <Form>
        <Heading>How much would you like to recycle?</Heading>
        <Radio.Group onChange={getValue} value={amount}>
          <Space direction="vertical">
            <Radio value={100}><Input placeholder="Increase 10%"/></Radio>
            <Radio value={200}><Input placeholder="Increase 20%"/></Radio>
            <Radio value={300}><Input placeholder="Increase 30%"/></Radio>
            <Radio value={400}><Input placeholder="Other (Please enter the amount)"/></Radio>
          </Space>
        </Radio.Group>
      </Form>
      <Img src={onboarding1} />
    </Wrapper>
  )
}

export default Onboarding1

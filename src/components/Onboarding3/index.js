import { useState } from 'react'
import { Radio, Input, Space } from 'antd'

import onboarding3 from '../../assets/img/onboarding3.svg'

import {
  Wrapper,
  Form,
  Img,
  Heading
} from './Onboarding3.styles'


const Onboarding3 = () => {
  const [amount, setAmount] = useState(0)

  const  getValue = e => {
    console.log('radio checked', e.target.value);
    setAmount(e.target.value)
  };

  return (
    <Wrapper>
      <Form>
        <Heading>What role do you want to play?</Heading>
        <Radio.Group onChange={getValue} value={amount}>
          <Space direction="vertical">
            <Radio value={100}><Input readOnly={true} placeholder="Participant/Member"/></Radio>
            <Radio value={200}><Input readOnly={true} placeholder="Ringleader"/></Radio>
            <Radio value={300}><Input readOnly={true} placeholder="Both"/></Radio>
          </Space>
        </Radio.Group>
      </Form>
      <Img src={onboarding3} />
    </Wrapper>
  )
}

export default Onboarding3

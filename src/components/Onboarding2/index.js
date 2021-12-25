import { useState } from 'react'
import { Radio, Input, Space } from 'antd'

import onboarding2 from '../../assets/img/onboarding2.svg'

import {
  Wrapper,
  Form,
  Img,
  Heading
} from './Onboarding2.styles'


const Onboarding2 = () => {
  const [amount, setAmount] = useState(0)

  const  getValue = e => {
    console.log('radio checked', e.target.value);
    setAmount(e.target.value)
  };

  return (
    <Wrapper>
      <Form>
        <Heading>How much would you like to improve?</Heading>
        <Radio.Group onChange={getValue} value={amount}>
          <Space direction="vertical">
            <Radio value={100}><Input readOnly={true} placeholder="100"/></Radio>
            <Radio value={200}><Input readOnly={true} placeholder="200"/></Radio>
            <Radio value={300}><Input readOnly={true} placeholder="300"/></Radio>
            <Radio value={400}><Input readOnly={true} placeholder="400"/></Radio>
          </Space>
        </Radio.Group>
      </Form>
      <Img src={onboarding2} />
    </Wrapper>
  )
}

export default Onboarding2

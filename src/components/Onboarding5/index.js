// import { useState } from 'react'
import { Input, Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

import {
  Wrapper,
  Form,
  Heading
} from './Onboarding5.styles'


const Onboarding5 = () => {


  return (
    <Wrapper>
      <Form>
        <Heading>Setup your community profile [optional]</Heading>
        <Upload>
          <Button style={{ width: '309px' }} icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <Input.TextArea placeholder="Username" />
      </Form>
    </Wrapper>
  )
}

export default Onboarding5

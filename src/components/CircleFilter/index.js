// import { useState } from 'react'
import { Input, Select } from 'antd'

import {Wrapper} from './CircleFilter.styles'

const { Option } = Select

const CircleFilter = () => {

  const handleChange = () => {

  }

  return (
    <Wrapper>
      <div className="fields">
        <Input placeholder="City/Country" />
        <Select defaultValue="Circle" onChange={handleChange}>
          <Option value="jack">Sample Circle</Option>
        </Select>
        <Select defaultValue="Circle Type" onChange={handleChange}>
          <Option value="jack">Sample Circle</Option>
        </Select>
        <Select defaultValue="Circle Subtype" onChange={handleChange}>
          <Option value="jack">Sample Circle</Option>
        </Select>
        <Select defaultValue="Actively Funding" onChange={handleChange}>
          <Option value="jack">Sample Circle</Option>
        </Select>
      </div>
      {/*<Button className="search">Search</Button>*/}
      <button className="search">Search</button>


    </Wrapper>
  )
}

export default CircleFilter

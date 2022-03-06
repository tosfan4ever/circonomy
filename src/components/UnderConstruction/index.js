import React, { useState } from 'react'
import { Modal, Input, Spin, message } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { Content, Button } from '../PagesStyles/EnterCircommerce.styles'
import Axios from '../../services/api'


const UnderConstruction = ({text}) => {
  const [loading, setLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [email, setEmail] = useState('')
  const antIcon = <LoadingOutlined style={{ fontSize: 20, color: '#333' }} spin />

  const notifyMeModal = () => {
    setIsModalVisible(true)
  }

  const handleChange = e => {
    setEmail(e.target.value)
  }

  const notifyMe = async () => {
    if (!email) return message.error('Email is required')

    setLoading(true)
    try {
      const res = (await Axios.post('waiting-list', {email})).data
      if (res.success) {
        setIsModalVisible(false)
        setLoading(false)
        setEmail('')
        return message.success('Email saved successfully')
      }
    } catch (e) {
      setLoading(false)
      message.error('Indicated interest with email already')
    }


  }

  return (
    <Content>
      <h1>Under Construction...</h1>
      <p>{text}</p>
      <Button onClick={notifyMeModal}>Notify Me</Button>
      <Modal
        visible={isModalVisible}
        footer={null}
        closable={false}
        onCancel={() => setIsModalVisible(false)}
      >
        <h1 className="txt-center">Notify Me</h1>
        <p className="txt-center">
          Enter your email to be notified as to when this <br/>
          feature will be launched</p>
        <Input onChange={handleChange} placeholder="Enter mail" />
        <Button type="button" style={{width: '100%'}} onClick={notifyMe}>
          { loading ? <Spin indicator={antIcon} /> : 'Confirm' }
        </Button>
      </Modal>
    </Content>
  )
}

export default UnderConstruction
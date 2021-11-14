import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../assets/img/logo.png'
import { Ul, Li, LogoImg } from '../Header/Header.styles'
import ConnectButton from '../../ConnectButton'

import { Wrapper } from './Drawer.styles'

const AppDrawer = ({ isToggle, appLinks }) => (
  <Wrapper isToggle={isToggle}>
    <LogoImg src={logo} isToggle={isToggle} />
    <Ul isToggle={isToggle}>
      {appLinks.map((link, i) => <Li isToggle={isToggle} key={i}>
        <Link to={link.link}>{ link.title }</Link>
      </Li>)}
    </Ul>
    <ConnectButton isToggle={isToggle} />
  </Wrapper>
)

export default AppDrawer

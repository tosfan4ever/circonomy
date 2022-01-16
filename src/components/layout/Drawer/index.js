import { Link } from 'react-router-dom'

import notification from '../../../assets/img/notification.svg'
import wallet from '../../../assets/img/wallet.svg'
import info from '../../../assets/img/info.svg'
import logo from '../../../assets/img/logo.png'

import { Wrapper, Icons } from './Drawer.styles'
import {Ul, Li, LogoImg} from '../Header/Header.styles'
import ConnectButton from '../../ConnectButton'



const AppDrawer = ({ isToggle, appLinks }) => (
  <Wrapper isToggle={isToggle}>
    <Link to='/'>
      <LogoImg src={logo} isToggle={isToggle}/>
    </Link>
    <Ul isToggle={isToggle}>
      {appLinks.map((link, i) => <Li isToggle={isToggle} key={i}>
        <Link to={link.link}>{link.title}</Link>
      </Li>)}
    </Ul>
    <Icons>
      <img src={info} style={{margin: '0 5px', width: '19px'}} alt="circonomy"/>
      <img src={notification} style={{margin: '0 5px', width: '19px'}} alt="circonomy"/>
      <img src={wallet} style={{margin: '0 5px', width: '19px'}} alt="circonomy"/>
    </Icons>
    <ConnectButton isToggle={isToggle} />
  </Wrapper>
)

export default AppDrawer

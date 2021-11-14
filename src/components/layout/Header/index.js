import { Link } from 'react-router-dom'

import logo from '../../../assets/img/logo.png'
import ConnectButton from '../../../components/ConnectButton'
import { Header, Ul, Li, LogoImg } from './Header.styles'

const AppHeader = ({ appLinks }) => {
  return (
    <Header>
    <LogoImg src={logo} />
    <Ul>
      {appLinks.map((link, i) => <Li key={i}>
        <Link to={link.link}>{ link.title }</Link>
      </Li>)}
    </Ul>
    <ConnectButton>Connect</ConnectButton>
  </Header>
)};

export default AppHeader;

import { useNavigate } from 'react-router-dom'
import { Button } from './Button.styles'

const ConnectButton = ({ isToggle }) => {
  const navigate = useNavigate()

  function goToRegister() {
    navigate('/sign-up')
  }

  return (
    <Button onClick={goToRegister} isToggle={isToggle }>
      Become a Circonomist
    </Button>
  )
}

export default ConnectButton

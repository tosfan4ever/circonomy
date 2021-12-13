import { ActivateCircleButton } from './ActivateCircleButton.styles'
import { useNavigate } from 'react-router-dom'

const ActivateCircleBtn = () => {
  const navigate = useNavigate()

  function goToRegister() {
    navigate('/sign-up')
  }

  return (
    <ActivateCircleButton onClick={goToRegister}>Activate Circle</ActivateCircleButton>
  )
}

export default ActivateCircleBtn

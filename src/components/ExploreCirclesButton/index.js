
import { useNavigate } from 'react-router-dom'
import { ExploreCirclesButton } from './ExploreCirclesButton.styles'

const ExploreCirclesBtn = () => {
  const navigate = useNavigate()

  const exploreCircles = () => {
    navigate('/explore-circles')
  }

  return (
    <ExploreCirclesButton onClick={exploreCircles}>
      Explore Circles
    </ExploreCirclesButton>
  )}

export default ExploreCirclesBtn

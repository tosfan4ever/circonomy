import { HeroWrapper, Content, Heading, Text } from './Hero.styles'
import ActivateCircleBtn from '../../components/ActivateCirlceButton'
import ExploreCirclesBtn from '../../components/ExploreCirclesButton'

const Hero = ({ isToggle }) => (
  <HeroWrapper>
    <Content>
      <Heading>Enter a circular world <br/>where your capital good <br/> becomes a public good</Heading>
      <Text>
        Circles are upcycling programmes sustained by you and <br/> maintained by upturning our
        linear economy into a circular one
      </Text>
      <ExploreCirclesBtn>Explore Circles</ExploreCirclesBtn>
      <ActivateCircleBtn>Activate Circle</ActivateCircleBtn>
    </Content>
  </HeroWrapper>
)

export default Hero

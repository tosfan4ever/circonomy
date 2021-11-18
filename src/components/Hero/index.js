import { HeroWrapper, Content, Heading, Text, HeroBtn } from './Hero.styles'
import ActivateCircleBtn from '../../components/ActivateCirlceButton'
import ExploreCirclesBtn from '../../components/ExploreCirclesButton'

const Hero = ({ isToggle }) => (
  <HeroWrapper>
    <Content>
      <Heading>Enter a circular world where your capital good  becomes a public good</Heading>
      <Text>
        Circles are upcycling programmes sustained by you and <br/> maintained by upturning our
        linear economy into a circular one
      </Text>
      <HeroBtn>
        <ExploreCirclesBtn>Explore Circles</ExploreCirclesBtn>
        <ActivateCircleBtn>Activate Circle</ActivateCircleBtn>
      </HeroBtn>
    </Content>
  </HeroWrapper>
)

export default Hero

import { HeroWrapper, Content, Heading, Text, ExploreCircles, ActivateCircle } from './Hero.styles'

const Hero = ({ isToggle }) => (
  <HeroWrapper>
    <Content>
      <Heading>Enter a circular world <br/>where your capital good <br/> becomes a public good</Heading>
      <Text>
        Circles are upcycling programmes sustained by you and maintained by upturning our
        linear economy into a circular one
      </Text>
      <ExploreCircles>Explore Circles</ExploreCircles>
      <ActivateCircle>Activate Circle</ActivateCircle>
    </Content>
  </HeroWrapper>
)

export default Hero

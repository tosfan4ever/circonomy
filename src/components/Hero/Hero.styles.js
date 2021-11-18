import styled from 'styled-components'

import img from '../../assets/img/hero-bkg.svg'

export const HeroWrapper = styled.div`
  background: url(${img}) center no-repeat;
  background-size: cover;
  height: 700px; 
  margin-top: -5px;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
  padding: 64px 130px;
`

export const Heading = styled.h1`
  font-size: 4em;
  grid-column: 1 / 5;
  color: #fefefe;
`

export const Text = styled.p`
  font-size: 2em;
  grid-column: 1 / 5;
  color: #fefefe;
`

export const ExploreCircles = styled.button`

  grid-column: 1 / 2;
`

export const ActivateCircle = styled.button`

  grid-column: 2 / 3;
`
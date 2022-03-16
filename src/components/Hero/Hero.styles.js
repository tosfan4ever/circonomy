import styled from 'styled-components'

import img from '../../assets/img/hero-bkg.svg'

export const HeroWrapper = styled.div`
  background: url(${img}) center no-repeat;
  background-size: cover;
  height: 900px; 
  margin-top: -5px;
  
  @media (max-width: 767px) {
    height: 600px;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
  padding: 64px 130px;
  
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 24px 10px;
  }
`

export const Heading = styled.h1`
  font-size: 5em;
  font-weight: 900;
  font-family: 'Revalia', cursive;
  grid-column: 1 / 5;
  color: #fefefe;
  
   @media (max-width: 767px) {
    font-size: 2.2em;
    grid-column: 1 / -1;
    margin-top: 40px;
  }
`

export const Text = styled.p`
  font-size: 2em;
  font-family: 'Prompt', sans-serif;
  grid-column: 1 / 5;
  color: #fefefe;
  
    @media (max-width: 767px) {
    font-size: 1.1em;
    grid-column: 1 / -1;
  }
`

export const HeroBtn = styled.div`
  grid-column: 1 / 5;
  display: grid;
  grid-template-columns: 30% 30%;
  grid-gap: 24px;
  color: #fefefe;
  
    @media (max-width: 767px) {
    font-size: 1.1em;
    grid-column: 1 / -1;
    grid-template-columns: 45% 45%;
  }
`

import styled from 'styled-components'

import img from '../../assets/img/form-bkg.svg'

export const Wrapper = styled.div`
  background: url(${img}) center no-repeat;
  background-size: contain;
  height: 100vh;
  
  @media (max-width: 767px) {
   
  }
`

export const Content = styled.div`
  width: 60%;
  height: 300px;
  border-radius: 5px;
  border: 1px solid grey;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: grid;
  grid-template-columns: 40% 60%;
  
  @media (max-width: 767px) {
   
  }
`

export const WelcomeBack = styled.div`
  background: var(--brand-color);
  
  @media (max-width: 767px) {
   
  }
`

export const Register = styled.div`
  
  @media (max-width: 767px) {
   
  }
`

export const Heading = styled.h1`
  margin: 40px 0;
  @media (max-width: 767px) {
   
  }
`

export const Text = styled.p`
  margin: 40px 0;
  font-size: 2rem;
  @media (max-width: 767px) {
   
  }
`
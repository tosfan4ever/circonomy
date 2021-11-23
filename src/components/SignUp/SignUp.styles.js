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

export const SignUpWrapper = styled.div`
  background: #fefefe;
  padding: 0 50px 50px 50px;
  @media (max-width: 767px) {
   
  }
`

export const Heading = styled.h1`
  font-family: 'Revalia', cursive;
  font-weight: 900;
  margin: 40px 0;
  @media (max-width: 767px) {
   
  }
`

export const Text = styled.p`
  margin: 40px 0;
  font-size: 1.4rem;
  @media (max-width: 767px) {
   
  }
`

export const Button = styled.button`
  border-radius: 24px;
  background: var(--brand-color);
  border: ${({border}) => '1px solid '+border};
  padding: 4px 20px;
  margin-top: 30px;
  font-weight: bolder;
 
  
   @media screen and (max-width: 767px) {

}    

`
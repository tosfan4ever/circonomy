import styled from 'styled-components'

import img from '../../assets/img/form-bkg.svg'

export const Wrapper = styled.div`
  background: url(${img}) center no-repeat;
  background-size: contain;
  height: 600px;
  
  @media (max-width: 767px) {
   
  }
`

export const Content = styled.div`
  width: 60%;
  border-radius: 4px;
  border: 1px solid grey;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: grid;
  grid-template-columns: 60% 40%;
  
  @media (max-width: 767px) {
    width: 80%;
    position: relative;
    margin-top: 200px;
    grid-template-columns: 100%;
  }
`

export const WelcomeBack = styled.div`
  background: var(--brand-color);
  
  @media (max-width: 767px) {
   padding-bottom: 30px;
  }
`

export const MagicLinkWrapper = styled.div`
  background: #fefefe;
  padding: 0 50px 50px 50px;
  
  @media (max-width: 767px) {
    padding: 0 10px 50px 10px;
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
   padding: 0 10px;
   margin-bottom: 10px;
  }
`

export const Button = styled.button`
  border-radius: 24px;
  background: var(--brand-color);
  border: ${({border}) => '1px solid '+border};
  padding: 4px 20px;
  margin-top: 30px;
  font-weight: bolder;
  cursor: pointer;
 
  
   @media screen and (max-width: 767px) {

}    

`
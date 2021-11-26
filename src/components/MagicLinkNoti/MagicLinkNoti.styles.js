import styled from 'styled-components'

import img from '../../assets/img/form-bkg.svg'

export const Wrapper = styled.div`
  background: url(${img}) center no-repeat;
  background-size: contain;
  height: 600px;
  
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
 
   @media screen and (max-width: 767px) {

}    

`
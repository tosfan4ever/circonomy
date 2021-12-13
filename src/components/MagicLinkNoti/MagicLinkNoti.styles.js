import styled from 'styled-components'

import img from '../../assets/img/form-bkg.svg'

export const Wrapper = styled.div`
  background: url(${img}) center no-repeat;
  background-size: contain;
  height: 700px;
  text-align: center;
  @media (max-width: 767px) {
   
  }
`

export const Content = styled.div`
  width: 35%;
  background: #fefefe;
  border-radius: 4px;
  border: 1px solid var(--app-border);
  padding: 30px;
  margin: 30px auto 30px auto;
  
  @media (max-width: 767px) {
    width: 80%;
    position: relative;
    margin-top: 100px;
    grid-template-columns: 100%;
  }
`

export const Heading = styled.h1`
  font-family: 'Revalia', cursive;
  font-weight: 900;
  margin: 40px 0;
  @media (max-width: 767px) {
   
  }
`

export const Image = styled.img`

  text-align: center;
`

export const Text = styled.p`
  margin: 40px 0;
  font-size: 1.2rem;
  text-align: left;
   
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
  display: block;
  width: 200px;
  margin: 0 auto 22px auto;
  font-weight: bolder;
  
 
   @media screen and (max-width: 767px) {

}    

`
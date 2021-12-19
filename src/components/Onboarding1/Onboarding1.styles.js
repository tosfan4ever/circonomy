import styled from 'styled-components'


export const Wrapper = styled.div`

  padding: 50px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 767px) {
    padding: 0;
    margin-bottom: 12px;
    grid-template-columns: 1fr;
  }
`

export const Form = styled.div`

  
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`


export const Heading = styled.h1`
  font-family: 'Revalia', cursive;
  font-weight: 900;
  @media (max-width: 767px) {
   
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

export const Img = styled.img`
  width: 100%;
  height: auto;
  
 
   @media screen and (max-width: 767px) {

}    

`
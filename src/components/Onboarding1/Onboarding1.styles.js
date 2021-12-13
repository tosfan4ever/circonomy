import styled from 'styled-components'


export const Wrapper = styled.div`
  width: 50%;
  margin: 30px auto;
  padding: 50px 30px;
  border: 1px solid var(--app-border);
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 767px) {
    width: 90%;
    padding: 40px 20px;
    grid-template-columns: 1fr;
  }
`

export const Form = styled.div`
  //display: grid;
  //grid-template-columns: 60% 40%;
  
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
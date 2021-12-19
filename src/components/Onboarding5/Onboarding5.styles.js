import styled from 'styled-components'


export const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto; 
  padding: 50px 30px;
  display: grid;
  grid-template-columns: 1fr;
  
  @media (max-width: 767px) {
    width: 80%;
    padding: 0;
  
  }
`

export const Form = styled.div`
  
  @media (max-width: 767px) {
  
  }
`

export const Heading = styled.h1`
  font-family: 'Revalia', cursive;
  font-weight: 900;
  @media (max-width: 767px) {
   
  }
`

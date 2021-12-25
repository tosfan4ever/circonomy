import styled from 'styled-components'


export const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto; 
  padding: 50px 30px;
  display: grid;
  grid-template-columns: 1fr;
  
  @media (max-width: 767px) {
    width: 80%;
    padding: 0;
  
  }
`

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 22px;
  
  @media (max-width: 767px) {
  
  }
`

export const Option = styled.div`
  padding: 40px 10px;
  text-align: center;
  border: 1px solid grey;
  width: 200px;
  @media (max-width: 767px) {
    padding: 15px 7px;
    width: 100px;
  }
`

export const Heading = styled.h1`
  font-family: 'Revalia', cursive;
  font-weight: 900;

`

export const Ul = styled.ul`
  padding-left: 15px;
`

import styled from 'styled-components'
import { Button } from 'antd'

export const Header = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fefefe;
  padding: 32px 40px;
  
   @media screen and (max-width: 767px) {
     padding: 32px 18px;   
  }

`


export const LogoImg = styled.img`
  width: 150px;

  @media screen and (max-width: 767px) {
    width: 100px;
  }
`

export const Ul = styled.ul`
  margin-bottom: 0;
  padding: 0;
  display: inline;
  
  @media screen and (max-width: 767px) {
    display: none;    
  }
`

export const Li = styled.li`
  display: inline;
  margin: 0 26px;
  color: black;
  
  a {
    color: black;
  }
`

export const ConnectButton = styled(Button)`
  border-radius: 24px;
  background: var(--brand-color);
  border: 1px solid var(--brand-color);
  font-weight: bolder;
  
   @media screen and (max-width: 767px) {
    display: none;    
  }
`



import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  background: #f6f3f3;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99999;
  transition: 0.4s all;
  display: ${({isToggle}) => (isToggle ? 'flex' : 'none')};
  flex-direction: ${({isToggle}) => (isToggle ? 'column' : '')};
  justify-content: ${({isToggle}) => (isToggle ? 'center' : '')};

`

export const Icons = styled.div`
  margin: 22px 0;
  display: flex;
  justify-content: center;
  
`



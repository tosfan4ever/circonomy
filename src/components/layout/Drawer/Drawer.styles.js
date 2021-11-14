import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  background: #f6f3f3;
  width: 100%;
  position: fixed;
  top: 0;
  transition: 0.4s all;
  display: ${({isToggle}) => (isToggle ? 'flex' : 'none')};
  flex-direction: ${({isToggle}) => (isToggle ? 'column' : '')};
  justify-content: ${({isToggle}) => (isToggle ? 'center' : '')};

`



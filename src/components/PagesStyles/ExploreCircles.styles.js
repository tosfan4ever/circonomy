import styled from 'styled-components'


export const Wrapper = styled.div`
  position: relative;
  
  .filter {
    position: absolute;
    top: 20px;
    z-index: 999;
    width: 80%;
    left: 10%;
    background: #F4F4F9;
    padding: 8px 20px;
    border: 1px solid gray;
    border-radius: 8px;
    
    p {
      margin: 0;
    }
  }
  
     .feats {
      position: absolute;
      bottom: -500px;
      z-index: 9999;
      width: 80%;
      left: 10%;
    }
  

  @media (max-width: 767px) {
   
  }
`


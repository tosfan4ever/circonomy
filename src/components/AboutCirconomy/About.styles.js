import styled from 'styled-components'

import img from '../../assets/img/intro.svg'

export const Wrapper = styled.div`
  width: 60%;
  margin: 20px auto;
  
  p {
    font-size: 18px;
  
  }
  
  .ab-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 34px;
  }
  
  .ab-content {
    padding: 0 20px;
   
  }
  
  @media (max-width: 767px) {
    width: 90%;
    
    .abt {
      position: relative;
    }
    
    .ab-item {
      display: block;
      
       img {
        display: none;
      }
    }
    
    .ab-content {
      padding: 0 8px;
    }
  }
`


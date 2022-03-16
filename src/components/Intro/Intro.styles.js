import styled from 'styled-components'

import img from '../../assets/img/intro.svg'

export const IntroWrapper = styled.div`
  //background: url(${img}) right no-repeat;
  //background-size: contain;
  display: flex;
  align-items: center;
  background: #fefefe;
  padding-top: 20px;
 width: 80%;
 margin: -200px auto 10px auto;
  
  //padding: 30px;
  
  .right {
    background: url(${img}) right no-repeat;
    background-size: cover;
    height: 300px; 
    width: 50%;
  }
  
  .content {
    width: 40%;
    border: 1px solid var(--app-border);
    border-radius: 8px;
    background: #fefefe;
    padding: 30px;
    
    h1 {
      font-weight: 900;
    }
    
    p {
      font-weight: 500;
      font-size: 18px;
    }
  }
  
  @media (max-width: 767px) {
    display: block;
    min-height: 478px;
    width: 95%;
    padding: 10px;
    border-radius: 8px;
    margin: -50px auto 10px auto;
    
    .content {
      width: 100%;
    }
    
    .right {
      display: none;
    }
  }
`


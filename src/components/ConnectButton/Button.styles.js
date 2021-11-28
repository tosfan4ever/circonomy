import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 24px;
  background: var(--brand-color);
  border: 1px solid var(--brand-color);
  padding: 4px 20px;
  font-weight: bolder;
  cursor: pointer;
  
   @media screen and (max-width: 767px) {
   
    ${({isToggle}) => {
        if (isToggle) {
          return {
            width: '65%',
            marginRight: 'auto',
            marginLeft: 'auto',
            display: 'inline'
          }
        }
        return {
          width: '100px',
          display: 'none'
        }
      }
    }    
  }
`



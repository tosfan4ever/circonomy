import styled from 'styled-components'


export const Wrapper = styled.div`
  width: 50%;
  height: 550px;
  margin: 30px auto;
  padding: 50px 30px;
  border: 1px solid var(--app-border);
  position: relative;
  

  
  @media (max-width: 767px) {
    width: 90%;
    padding: 40px 20px;
    grid-template-columns: 1fr;
  }
`

export const Buttons = styled.div`
  display: flex;
  position: absolute;
  bottom: 30px;
`



export const Button = styled.button`
  border-radius: 24px;
  background: var(--brand-color);
  border: ${({border}) => '1px solid '+border};
  padding: 4px 20px;
  display: block;
  width: 200px;
  font-weight: bolder;
  cursor: pointer;
    

`

export const BackButton = styled.button`
  border-radius: 24px;
  background: transparent;
  border: 1px solid var(--app-border);
  padding: 4px 20px;
  display: block;
  width: 200px;
  margin-right: 15px;
  font-weight: bolder;
  cursor: pointer;
    

`

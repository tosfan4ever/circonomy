import styled from 'styled-components'


export const Wrapper = styled.div`
  padding: 12px;
  background: #fefefe;
  
  
  .content {
    display: flex;
    justify-content: space-between;
  }
  
  .feat-content {
    border: 1px solid lightgrey;
  }
  
  * {
    font-size: 12px;
  }
  
  img {
    width: 100%;
    height: auto;
  }
  
  .feat {
    margin: 5px;
  }
  
  .feat-details {
    padding: 12px;
    > * {
      margin-bottom: 5px;
    }
  }
  
  .btns {
    display: flex;
    justify-content: flex-end;
  }
  
  .button {
    border-radius: 24px;
    background: var(--brand-color);
    border: 1px solid lightgrey;
    padding: 4px 8px;
    display: block;
    width: 100px;
    font-weight: bolder;
  }
  
  .btn-link {
    background: transparent;
    border: none;
  }

  

`

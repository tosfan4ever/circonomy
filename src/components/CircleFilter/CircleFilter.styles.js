import styled from 'styled-components'


export const Wrapper = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .fields {
    display: flex;
    
    > * {
      width: 200px;
      margin-right: 8px;
    }
  }
  
  .search {
    padding: 8px 30px;
    border-radius: 20px;
    background: #fefefe;
    border: 1px solid grey;
    color: #444;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: 900;
    margin: 4px 2px;
    cursor: pointer;
  }
  
  @media (max-width: 767px) {
  
  }
`

import styled from 'styled-components'
import img from '../../assets/img/form-bkg.svg'

export const Wrapper = styled.div`
  background: url(${img}) center no-repeat;
  background-size: contain;
  height: 600px;
`


export const Content = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  border: 1px solid lightgrey;
  border-radius: 8px;
  background: #fefefe;
  padding: 40px;
  letter-spacing: 1px;

`

export const Button = styled.button`
  border-radius: 24px;
  background: var(--brand-color);
  border: 1px solid var(--brand-color);
  padding: 4px 20px;
  margin-top: 30px;
  font-weight: bolder;
  cursor: pointer;
  width: 150px;

`

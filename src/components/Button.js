import styled from '@emotion/styled'

const Button = styled.button`
  padding: 8px;
  background-color: white;
  font-size: 14px;
  color: black;
  font-weight: bold;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;

  &:hover {
    color: #503484;
    transform: scale(0.8);
  }
`

export default Button;
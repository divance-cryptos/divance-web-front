import styled from '@emotion/styled'

export const Nav = styled.header`
  padding: 2rem;
  background-color: #FFFFFF;
  color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  flex-shrink: 0;
  width: 100%;

`

export const NavItem = styled.div`
  display: flex;
`
export const NavLogo = styled.img`
  height: 40px;
`
export const ChatIcons = styled.span`
  display: flex;
  margin-right: 30px;
  font-size: 20px;
  color: #503484;
`

export const NavBrand = styled.h3`
  margin-right: 30px;
`

export const Icons = styled.h3`
  margin-right: 15px;

  &:hover {
    transform: scale(1.2);
  }
`

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const LogoText = styled.p`
  font-weight: 500px;
  font-size: 20px;
  line-height: 1.2;
`;
export const FlexWrap = styled.div`
display: flex;
gap: 8px;
align-items: center;
`
export const HeaderWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 128px;
  margin-bottom: 30px;
  position: relative;

`;

export const HeaderLinkWrap = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 28px;
`
export const RegisterButton = styled.button`
  padding: 14px 39px;
  text-color: #ffffff;
  background-color: #121417;
  border-radius: 12px;
  outline: none;
  border: transparent;
  color: #FFFFFF;
`;
export const LogInButton = styled.button`
background: transparent;
outline: none;
border: none;
height: 20px;
display: flex;
align-items: center;
margin-right: 8px;
gap: 8px;
`;
export const HeaderLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  position: relative;
  &.active {
    &::after {
      content: '';
      display: block;
      height: 4px;
      background-color: white;
      position: absolute;
      border-radius: 2px;
      top: 28px;
      left: 0;
      right: 0;
    }
  }
`;
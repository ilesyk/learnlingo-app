import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
export const LogoText = styled.p`
  font-weight: 500px;
  font-size: 20px;
  line-height: 1.2;
  &:hover {
    color: rgb(244, 197, 80);
  }
  transition: color 200ms linear;
`;
export const FlexWrap = styled.div`
display: flex;
gap: 8px;
align-items: center;
`
export const HeaderWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
max-width: 1184px;
`;

export const HeaderLinkWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 28px;
  @media (max-width: 749px) {
    display: none;
  }
`;
export const RegisterButtonWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  @media (max-width: 749px) {
    display: none;
  }
`;
export const RegisterButton = styled.button`
  padding: 14px 39px;
  text-color: #ffffff;
  background-color: #121417;
  border-radius: 12px;
  outline: none;
  border: transparent;
  color: #ffffff;
  &:hover {
    background-color: rgb(244, 197, 80);
  }
  transition: background-color 200ms linear;
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
  &:hover {
    color: rgb(244, 197, 80);
  }
  transition: color 200ms linear;
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
      background-color: rgb(244, 197, 80);
      position: absolute;
      border-radius: 2px;
      top: 22px;
      left: 0;
      right: 0;
    }
  }
  &:hover {
    color: rgb(244, 197, 80);
  }
  transition: color 200ms linear;
`;

export const PopUpButton = styled.button`
  border: none;
  outline: none;
  display: block;
  background: transparent;
  &:hover {
    transform: scale(1.15);
  }
  transition: transform 200ms linear;
  @media (min-width: 750px) {
    display: none;
  }
`;

export const HeaderMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  position: absolute;
  top: 60px;
  background: white;
  width: 100%;
  padding: 20px;
  z-index: 1;

${props =>
    props.isopen &&
    css`
      animation: slideIn 0.3s ease forwards;
    `};

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-60px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  @media (min-width: 750px) {
    display: none;
  }
`;
import styled from 'styled-components';
import { Field } from 'formik';

export const ModalCloseButton = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border: none;
  background: transparent;
  outline: none;
  &:hover {
    transform: scale(1.15);
  }
  transition: transform 200ms linear;
`;
export const ModalHead = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const ModalText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  margin-bottom: 40px;
  color: rgba(18, 20, 23, 0.8);
`;

export const ModalInput = styled(Field)`
  width: 438px;
  height: 54px;
  padding: 16px 18px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  margin-bottom: 18px;
`;

export const PasswordShowButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 17px;
  right: 17px;
  cursor: pointer;
  border: none;
  background: transparent;
  outline: none;
`;

export const ModalSubmitButton = styled.button`
  width: 438px;
  height: 60px;
  padding: 16px;
  text-align: center;
  width: 438px;
  height: 60px;
  outline: none;
  border: transparent;
  background: #f4c550;
  border-radius: 12px;
  &:is(:hover, :focus) {
    background-color: #ffdc86;
  }
  transition: background-color 200ms linear;
`;

export const ModalTeacherAvatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 100px;
`;

export const RadioWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const RadioBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const RadioField = styled(Field)`
  position: relative;
  height: 22px;
  width: 22px;
  margin-right: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #ffffff;
    border: 2px solid rgba(18, 20, 23, 0.1);
    transform: translate(-50%, -50%);
  }

  &:checked::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #f4c550;
    transform: translate(-50%, -50%);
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #f4c550;
    transform: translate(-50%, -50%);
  }
`;

export const ModalTeacherLegend = styled.legend`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 20px;
`;

export const ModalTeacherName = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
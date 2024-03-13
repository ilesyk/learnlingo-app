import { Form, Field } from 'formik';
import styled from 'styled-components';
import { theme } from '../theme';


export const StyledForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 32px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  color: #8a8a89;
`;

export const StyledField = styled(Field).attrs(props => ({
  as: 'select',
  icon: props.icon,
}))`
  padding: 14px 18px;
  border-radius: 14px;
  outline: none;
  border: 1px solid rgba(18, 20, 23, 0.1);
  appearance: none;
  overflow: hidden;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  cursor: pointer;

  &.language {
    width: 222px;
  }
  &.level {
    width: 246px;
  }
  &.price {
    width: 124px;
  }

  option {
    color: #8a8a89;
  }
`;

export const FilterResetButton = styled.button`
  display: flex;
  align-items: flex-start;
  padding: 16px 28px;
  background: transparent;
  border: none;
  border-radius: 12px;
  height: 28px;
  margin-top: 26px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.11;
  &:hover {
    color: rgb(244, 197, 80);
  }
  transition: color 200ms linear;
`;

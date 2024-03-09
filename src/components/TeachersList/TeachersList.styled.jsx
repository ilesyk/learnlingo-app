import styled from 'styled-components';

export const TeachersListWrapper = styled.div`
  display: flex;
  gap: 32px;
  max-width: 1184px;
  flex-wrap: wrap;
  flex-direction: column;
  margin-bottom: 64px;
`;

export const LoadMoreButton = styled.button`
  padding: 16px 48px;
  border-radius: 12px;
  background-color: rgb(244, 197, 80);
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  display: block;
  margin-bottom: 96px;
  margin: 0 auto;
  &:is(:hover, :focus) {
    background-color: #ffdc86;
  }
  transition: color 200ms linear;
`;
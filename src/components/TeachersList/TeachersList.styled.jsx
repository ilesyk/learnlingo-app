import styled from 'styled-components';

export const TeachersListWrapper = styled.ul`
  display: flex;
  gap: 32px;
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
  margin: 0 auto;
  &:is(:hover, :focus) {
    background-color: #ffdc86;
  }
  transition: background-color 200ms linear;
`;
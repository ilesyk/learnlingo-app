import styled from "styled-components";

export const SharedWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 320px;

  @media screen and (min-width: 768px) {

    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {

    max-width: 1440px;
  }
`;
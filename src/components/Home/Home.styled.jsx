import styled from "styled-components";

export const HomePageWrap = styled.div`
  display: flex;
  gap: 24px;
  max-width: 1312px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto 24px;
  @media (min-width: 750px) {
    flex-wrap: nowrap;
  }
`;
export const HomePageDescription = styled.div`
  border-radius: 30px;
  background: rgb(248, 248, 248);
padding: 32px;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  justify-content: space-between;
  @media (min-width: 750px) {
    padding: 98px 64px;
  }
  & :last-child {
    margin-top: 16px;
  }
`;
export const HomePageHead = styled.h1`
  color: rgb(18, 20, 23);
  font-family: "Roboto";
  font-size: 48px;
  font-weight: 500;
  line-height: 1.16;
  letter-spacing: -2%;
  text-align: left;
`;
export const HomePageText = styled.p`
color: rgb(18, 20, 23);
font-family: Roboto;
font-size: 16px;
font-weight: 400;
line-height: 1.38;
letter-spacing: -2%;
text-align: left;
`;

export const GetStartedButton = styled.button`
  border-radius: 12px;
  background: rgb(244, 197, 80);
  padding: 16px 88px;
  color: #121417;
  outline: none;
  border: transparent;
  cursor: pointer;
  &:is(:hover, :focus) {
    background-color: #ffdc86;
  }
  transition: background-color 200ms linear;
`;

export const HomePageImage = styled.div`
max-width: 568px;
`

export const HomePageDetailsWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1312px;
  margin: 0 auto;
  gap: 20px 100px;
  border: 1.5px dashed rgb(244, 197, 80);
  border-radius: 30px;
  padding: 40px;
  border-spacing: 30px;
`;

export const HomePageDetailsNumber = styled.p`
  color: rgb(18, 20, 23);
  font-family: Roboto;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.14;
`;
export const HomePageDetailsText = styled.p`
  color: rgba(18, 20, 23, 0.7);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  max-width: 96px;
`;
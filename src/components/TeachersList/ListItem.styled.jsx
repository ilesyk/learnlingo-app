import styled from 'styled-components';

export const TeacherItemWrap = styled.div`
  border-radius: 24px;
  background: rgb(255, 255, 255);
  padding: 24px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1184px;
  gap: 48px;
  @media (min-width: 600px) {
    flex-wrap: nowrap;
  }
`;

export const TeacherAvatarWrap = styled.div`
  width: 120px;
  height: 120px;
  border: 3px solid rgb(251, 233, 186);
  border-radius: 100px;
  background: rgb(255, 255, 255);
  padding: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TeacherAvatar = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 100px;
`;

export const TeacherOnline = styled.div`
  width: 12px;
  height: 12px;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 100px;
  background-color: #38cd3e;
  position: absolute;
  top: 16px;
  right: 20px;
`;
export const TeacherRatingWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 32px;
  justify-content: space-between;
  margin-right: 10px;
  @media (min-width: 600px) {
    flex-wrap: nowrap;
    margin-right: 44px;
  }
`;
export const TeacherRating = styled.li`
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 4px;
    right: -10px;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.2);
  }
`;

export const TeacherHeaders = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #8a8a89;
`;

export const TeacherName = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  margin: 8px 0 32px;
`;

export const TeacherDescription = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #121417;
`;

export const TeacherConditions = styled.p``;

export const TeachersLanguages = styled.li`
  padding: 8px 12px;
  border: 1px solid rgba(18, 20, 23, 0.2);
  border-radius: 35px;
  &:first-child {
    background-color: rgb(244, 197, 80);
    border: transparent;
  }
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.15);
  }
  transition: transform 200ms linear;
`;

export const ReadMoreButton = styled.button`
  color: rgb(18, 20, 23);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  margin-bottom: 32px;
  background: none;
  border: none;
  outline: none;
  &:hover {
    color: rgb(244, 197, 80);
  }
  transition: color 200ms linear;
`;

export const TeacherReviewWrap = styled.div``;

// export const TeacherReviewAvatar = styled.div`
//   width: 44px;
//   height: 44px;
//   border-radius: 100px;
// `;

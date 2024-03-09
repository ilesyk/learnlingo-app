import { useState } from 'react';
import {
  ReadMoreButton,
  TeacherDescription,
  TeacherHeaders,
  TeacherReviewWrap,
  TeachersLanguages,
} from './ListItem.styled';
import { IoStar } from 'react-icons/io5';
import { LoadMoreButton } from './TeachersList.styled';
import { TeacherModal } from 'components/Modal/TeacherModal';
export const TeacherReadMore = ({ teacher }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);
  const [clickedTeacher, setClickedTeacher] = useState(null);
  const handleOpenDetails = () => {
    setIsReadMore(true);
  };
  const handleOpen = teacher => {
    setClickedTeacher(teacher);
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };
  const handleClose = () => {
    setClickedTeacher(null);
    document.body.style.overflow = 'auto';
    setIsOpen(false);
  };
  return (
    <>
      {!isReadMore ? (<>
              <ReadMoreButton onClick={handleOpenDetails}>Read more</ReadMoreButton>
              <div style={{ display: 'flex', gap: '8px' }}>
                  {teacher.levels.map((level, i) => {
                    return (
                      <TeachersLanguages key={i}>{level}</TeachersLanguages>
                    );
                  })}
                </div></>
      ) : (
        <div>
          <p style={{ marginBottom: '32px' }}>{teacher.experience}</p>
          {teacher.reviews.map((review, i) => {
            return (
              <TeacherReviewWrap key={i} style={{ marginBottom: '32px' }}>
                <TeacherHeaders>{review.reviewer_name}</TeacherHeaders>
                <p style={{ marginBottom: '16px' }}>
                  <IoStar size={16} color={'#FFC531'} />{' '}
                  <span>{review.reviewer_rating}</span>
                </p>
                <TeacherDescription style={{ marginBottom: '32px' }}>
                  {review.comment}
                </TeacherDescription>
              </TeacherReviewWrap>
            );
          })}
         <div style={{ display: 'flex', gap: '8px', marginBottom: "32px" }}>
                  {teacher.levels.map((level, i) => {
                    return (
                      <TeachersLanguages key={i}>{level}</TeachersLanguages>
                    );
                  })}
                </div>
            <LoadMoreButton type="button" onClick={()=>handleOpen(teacher)}>Book trial lesson</LoadMoreButton>
        {isOpen && (
        <TeacherModal
          isOpen={isOpen}
          handleClose={handleClose}
          teacher={clickedTeacher}
        />
      )}
        </div>
      )}
    </>
  );
};

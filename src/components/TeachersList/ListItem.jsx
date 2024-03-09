import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favoritesSlice';
import { selectFavorites } from '../../redux/selectors';
import {
  FavoriteButton,
  TeacherAvatar,
  TeacherAvatarWrap,
  TeacherDescription,
  TeacherHeaders,
  TeacherItemWrap,
  TeacherName,
  TeacherOnline,
  TeacherRating,
} from './ListItem.styled';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { IoBookOutline } from 'react-icons/io5';
import { IoStar } from 'react-icons/io5';
import { TeacherReadMore } from './TeacherReadMore';

export const ListItem = ({ teachers, limit  }) => {
  const favoriteTeachers = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const handleAddToFavorites = teacher => {
    dispatch(addToFavorites(teacher));
    };
    
  const handleRemoveFromFavorites = teacher => {
    dispatch(removeFromFavorites(teacher));
    };
    
  const isInFavorite = teacher => {
    return (
      favoriteTeachers &&
      favoriteTeachers.find(
        favoriteTeacher => favoriteTeacher.id === teacher.id
      )
    );
    };
    
  return (
    <>
      {teachers &&
        teachers.slice(0, limit).map((teacher, i) => {
          return (
            <TeacherItemWrap key={i}>
              {isInFavorite(teacher) ? (
                <FavoriteButton
                  onClick={() => {
                    handleRemoveFromFavorites(teacher);
                  }}
                >
                  <FaHeart size={26} color={'#F4C550'} />
                </FavoriteButton>
              ) : (
                <FavoriteButton
                  onClick={() => {
                    handleAddToFavorites(teacher);
                  }}
                >
                  <FaRegHeart size={26} />
                </FavoriteButton>
              )}
              <TeacherAvatarWrap>
                <TeacherAvatar
                  style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${teacher.avatar_url})`,
                  }}
                />
                <TeacherOnline />
              </TeacherAvatarWrap>
              <div>
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  <TeacherHeaders
                    style={{ marginBottom: '8px', marginRight: '102px' }}
                  >
                    Languages
                  </TeacherHeaders>{' '}
                  <div style={{ display: 'flex', gap: '32px' }}>
                    <TeacherRating>
                      <IoBookOutline style={{ marginRight: '8px' }} size={16} />
                      Lessons online
                    </TeacherRating>
                    <TeacherRating>
                      Lessons done: {teacher.lessons_done}
                    </TeacherRating>
                    <TeacherRating>
                      <IoStar
                        style={{ marginRight: '8px' }}
                        size={16}
                        color={'#FFC531'}
                      />
                      Rating: {teacher.rating}
                    </TeacherRating>
                    <TeacherRating>
                      Price / 1 hour:{' '}
                      <span style={{ color: '#38CD3E' }}>
                        {teacher.price_per_hour}$
                      </span>
                    </TeacherRating>
                  </div>
                </div>
                <TeacherName>
                  {teacher.name} {teacher.surname}
                </TeacherName>
                <ul>
                  <li style={{ marginBottom: '8px' }}>
                    <TeacherHeaders>
                      Speaks:{' '}
                      <TeacherDescription>
                        {teacher.languages.join(',')}
                      </TeacherDescription>
                    </TeacherHeaders>
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <TeacherHeaders>
                      Lesson Info:{' '}
                      <TeacherDescription>
                        {teacher.lesson_info}
                      </TeacherDescription>
                    </TeacherHeaders>
                  </li>
                  <li style={{ marginBottom: '16px' }}>
                    <TeacherHeaders>
                      Conditions:{' '}
                      <TeacherDescription>
                        {teacher.conditions.join(' ')}
                      </TeacherDescription>
                    </TeacherHeaders>
                  </li>
                </ul>
                <TeacherReadMore teacher={teacher}></TeacherReadMore>
              </div>
            </TeacherItemWrap>
          );
        })}
    </>
  );
};

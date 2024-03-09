import { TeachersListWrapper, LoadMoreButton } from './TeachersList.styled';
import { ListItem } from '../TeachersList/ListItem';
import { Link } from 'react-router-dom';
import { Loader } from '../Loader';
import { selectFavorites, selectFilteredTeachers, selectIsLoading, selectTeachers } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const TeachersList = ({ isFavorite }) => {
    const teachers = useSelector(selectTeachers);
    const [teachersLimit, setTeachersLimit] = useState(4);
  const favoriteTeachers = useSelector(selectFavorites);
  const filteredTeachers = useSelector(selectFilteredTeachers);
  const isLoading = useSelector(selectIsLoading);

  const loadMoreTeachers = () => {
    setTeachersLimit(teachersLimit +4);
  };

  return (
    <>
      {isFavorite && !favoriteTeachers.length ? (
        <div style={{ padding: '10px' }}>
          <h2
            style={{
              maxWidth: '320px',
              margin: '50px auto 50px',
              textAlign: 'center',
            }}
          >
            Your favorites list is empty
          </h2>
          <Link to="/teachers">
            <LoadMoreButton
            >
              Go to teachers list
            </LoadMoreButton>
          </Link>
        </div>
      ) : (
        <TeachersListWrapper>
                      <ListItem
                          limit={teachersLimit}
            teachers={
              isFavorite
                ? favoriteTeachers
                : !filteredTeachers.length
                ? teachers
                : filteredTeachers
            }
          />
        </TeachersListWrapper>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        teachersLimit  <
          (filteredTeachers.length ? filteredTeachers.length : teachers.length) &&
         (<LoadMoreButton onClick={loadMoreTeachers}>Load more</LoadMoreButton>)
      )}
    </>
  );
};

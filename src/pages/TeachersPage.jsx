import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components/Loader';
import { fetchTeachers } from '../redux/operations';
import { SearchBar } from '../components/SearchBar/SerachBar';
import { TeachersList } from '../components/TeachersList/TeachersList';

const Teachers = ({isFavorite}) => {
  const isLoading = useSelector(state => state.teachers.isLoading);
    const error = useSelector(state => state.teachers.error);
  const dispatch = useDispatch();

  useEffect(() => {
      const request = dispatch(fetchTeachers());
      
    return () => request.abort();
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: '#F8F8F8', padding: "30px 20px 96px" }}>
      {!isFavorite && <SearchBar />}
      {isLoading && <Loader />}
      {error && toast.error('Something was wrong :(')}
      <TeachersList isFavorite={isFavorite} />
    </div>
  );
};

export default Teachers;

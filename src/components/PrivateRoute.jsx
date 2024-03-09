import { Navigate } from 'react-router-dom';
import { selectUser } from '../redux/selectors';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ children }) => {
     const authUser = useSelector(selectUser);
    return authUser ? children : <Navigate to="/" />;
};

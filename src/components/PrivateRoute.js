import { useAuthentication } from 'hooks';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogIn, isRefreshing } = useAuthentication();
  const willRedirect = !isLogIn && !isRefreshing;
  return willRedirect ? <Navigate to={redirectTo} /> : Component;
};

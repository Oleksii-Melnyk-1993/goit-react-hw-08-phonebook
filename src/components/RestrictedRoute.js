import { useAuthentication } from 'hooks';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogIn = useAuthentication();
  return isLogIn ? <Navigate to={redirectTo} replace /> : Component;
};

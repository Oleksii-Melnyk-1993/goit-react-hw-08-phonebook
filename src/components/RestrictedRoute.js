import { useAuthentication } from 'hooks';

import { Navigate } from 'react-router-dom';

// import Register from 'pages/Register/Register';
// import Login from 'pages/Login/Login';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/',
  path = '/',
}) => {
  const isLogIn = useAuthentication();

  if (
    (path === '/register' && !isLogIn.isLogIn) ||
    (path === '/login' && !isLogIn.isLogIn)
  ) {
    return Component;
  }

  return isLogIn ? <Navigate to={redirectTo} /> : Component;
};

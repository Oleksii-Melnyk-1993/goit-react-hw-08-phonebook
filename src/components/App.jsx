import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAuthentication } from 'hooks';
import { refreshPage } from 'redux/auth/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from 'pages/Home/Home';
import { RestrictedRoute } from './RestrictedRoute';
import Login from 'pages/Login/Login';
import { PrivateRoute } from './PrivateRoute';
import Contacts from 'pages/Contacts/Contacts';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefresh } = useAuthentication();

  useEffect(() => {
    dispatch(refreshPage());
  }, [dispatch]);

  return isRefresh ? (
    <b>Login user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};

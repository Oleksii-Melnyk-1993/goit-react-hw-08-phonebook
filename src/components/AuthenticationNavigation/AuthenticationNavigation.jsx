import { NavLink } from 'react-router-dom';
import css from './AuthenticationNavigation.module.css';

export const AuthenticationNavigation = () => {
  return (
    <div>
      <NavLink className={css.nav_link} to="/register">
        Register
      </NavLink>
      <NavLink className={css.nav_link} to="/login">
        Log in
      </NavLink>
    </div>
  );
};

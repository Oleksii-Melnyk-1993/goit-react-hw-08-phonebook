import { NavLink } from 'react-router-dom';
import css from './AuthenticationNavigation.module.css';

export const AuthenticationNavigation = () => {
  return (
    <div>
      <NavLink to="/register" className={css.nav_link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.nav_link}>
        Log in
      </NavLink>
    </div>
  );
};

import { useAuthentication } from 'hooks';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLogIn } = useAuthentication();
  return (
    <nav>
      <NavLink to="/" className={css.nav_link}>
        Home
      </NavLink>
      {isLogIn && (
        <NavLink to="/contacts" className={css.nav_link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

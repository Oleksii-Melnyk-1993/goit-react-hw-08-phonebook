import { useAuthentication } from 'hooks';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLogIn } = useAuthentication();
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLogIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

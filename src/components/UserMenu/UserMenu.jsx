import { useAuthentication } from 'hooks';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuthentication();
  return (
    <div>
      <p>Hello, {user.name}</p>
      <button type="button" onClick={() => dispatch(logout())}></button>
    </div>
  );
};

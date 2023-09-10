import { useSelector } from 'react-redux';
import {
  selectIsLogIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/selectors';

export const useAuthentication = () => {
  const isLogIn = useSelector(selectIsLogIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return { isLogIn, isRefreshing, user };
};

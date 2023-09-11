import { AuthenticationNavigation } from 'components/AuthenticationNavigation/AuthenticationNavigation';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuthentication } from 'hooks';

export const AppHeader = () => {
  const { isLogIn } = useAuthentication;
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        borderBottom: '1px solid ',
      }}
    >
      <Navigation />
      {isLogIn ? <UserMenu /> : <AuthenticationNavigation />}
    </header>
  );
};

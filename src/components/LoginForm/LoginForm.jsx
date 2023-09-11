import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSumbit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        passwrd: form.elements.passwrd.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSumbit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        {' '}
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

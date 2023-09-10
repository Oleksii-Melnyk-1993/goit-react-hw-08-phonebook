import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSumbit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        passwrd: form.elements.passwrd.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSumbit} autoComplete="off">
      <label>
        {' '}
        Login
        <input type="text" name="name" />
      </label>{' '}
      Email
      <label>
        <input type="email" name="email" />
      </label>
      <label>
        {' '}
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

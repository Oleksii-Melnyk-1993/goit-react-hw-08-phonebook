import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { createFilter } from 'redux/filter/filterContacts';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    const { value } = e.currentTarget;

    dispatch(createFilter(value));
  };

  return (
    <label className={css.label}>
      Filter phone contacts by name{' '}
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </label>
  );
};

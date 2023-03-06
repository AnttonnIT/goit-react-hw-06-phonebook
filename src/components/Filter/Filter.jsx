import { nanoid } from 'nanoid';
import { StyledLabel } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filterInputId = nanoid();
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  return (
    <>
      <StyledLabel>
        Find contacts by name
        <input
          type="text"
          id={filterInputId}
          onChange={e => {
            dispatch(setFilter(e.target.value));
          }}
          value={filter}
        ></input>
      </StyledLabel>
    </>
  );
};

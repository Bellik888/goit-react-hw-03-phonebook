import shortid from 'shortid';

export const Filter = ({ handleChangeFilter, filter }) => {
  let inputFilterID = shortid();

  return (
    <div>
      <label htmlFor={inputFilterID}>Find contacts by name</label>
      <input
        id={inputFilterID}
        name={filter}
        type="text"
        value={filter}
        onChange={handleChangeFilter}
      ></input>
    </div>
  );
};

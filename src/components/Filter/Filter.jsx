const Filter = ({ filter, onFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={onFilter} />
    </label>
  );
};

export default Filter;

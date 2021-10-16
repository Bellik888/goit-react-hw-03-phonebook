import PropTypes from 'prop-types';

export const ContactListItem = ({ filter, contacts, deleteItem }) => {
  return (
    <>
      {filter === ''
        ? contacts.map(({ name, number, id }) => (
            <li key={id}>
              <p>
                {name} : {number}
              </p>
              <button type="button" onClick={() => deleteItem(id)}>
                Delete
              </button>
            </li>
          ))
        : contacts.map(
            ({ name, number, id }) =>
              name.toLowerCase().includes(filter.toLowerCase()) && (
                <li key={id}>
                  <p>
                    {name} : {number}
                  </p>
                  <button type="button" onClick={() => deleteItem(id)}>
                    Delete
                  </button>
                </li>
              ),
          )}
    </>
  );
};

ContactListItem.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
  deleteItem: PropTypes.func,
};

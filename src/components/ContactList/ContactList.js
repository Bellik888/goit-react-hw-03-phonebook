export const ContactList = ({ children }) => {
  return (
    { children } && (
      <section>
        <ul>{children}</ul>
      </section>
    )
  );
};

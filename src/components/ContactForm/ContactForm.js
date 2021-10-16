import { Component } from 'react';
import shortid from 'shortid';
export class ContactForm extends Component {
  inputNameID = shortid();
  inputNumberID = shortid();

  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };
  handleChangeNumber = e => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    let contact = {
      id: shortid(),
      name: this.state.name,
      number: this.state.number,
    };

    if (this.state.name && this.state.number) {
      this.setState({ contact });
      this.props.searchDuplicate(contact);
      // this.props.addNewContact(contact);
      this.setState({ name: '', number: '' });
    }
    return;
  };

  render() {
    let {
      handleSubmit,
      inputNameID,
      inputNumberID,
      handleChangeName,
      handleChangeNumber,
    } = this;
    let { name, number } = this.state;
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor={inputNameID}>Names</label>
          <input
            id={inputNameID}
            name={name}
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Ім'я включає букви, при потребі : апостроф, тире і пробіли"
            value={name}
            onChange={handleChangeName}
          ></input>

          <label htmlFor={inputNumberID}>Number</label>
          <input
            id={inputNumberID}
            name={number}
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            tittle="обов'язково цифри! при потребі '+' , '-', '()'"
            value={number}
            placeholder="XXX-XX-XX"
            onChange={handleChangeNumber}
          ></input>

          <button type="submit">Add contact</button>
        </form>
      </section>
    );
  }
}

import React, { useEffect } from "react";
import "./ContactList.scss";
import ContactItem from "../ContactItem/ContactItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact, getContact } from "../../redux/contacts/items/items-operations";
import { filterContacts } from "../../redux/contacts/contacts-reducers";

function ContactList({ contacts, deleteContact, getContactList }) {
  useEffect(() => getContactList(), [getContactList]);

  return (
    <ul className="list">
      {console.log("render")}
      {contacts.map((item) => (
        <ContactItem
          deleteContact={() => deleteContact(item.id)}
          key={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts }) => ({
  contacts: filterContacts(contacts.filter, contacts.items),
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (contact) => dispatch(deleteContact(contact)),
  getContactList: () => dispatch(getContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

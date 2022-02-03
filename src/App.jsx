import React, { Component } from "react";

import { connect } from "react-redux";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import Message from "./components/Message/Message";
import LoaderModal from "./components/LoaderModal/LoaderModal";

import "./styles/App.scss";

class App extends Component {
  render() {
    const { error, loading } = this.props;
    return (
      <>
        {loading && <LoaderModal />}
        {error && <h2 className="error">{error}</h2>}
        <div className="phonebook__wrapper">
          <div className="form-wrapper">
            <h1 className="headline">Phonebook</h1>
            <h2>Add new contact</h2>
            <ContactForm />
          </div>
          <div className="list-wrapper">
            <h2>Contacts</h2>
            <Filter />
            <Message />

            <ContactList />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ contacts }) => ({
  loading: contacts.loading,
  error: contacts.error,
});

export default connect(mapStateToProps, null)(App);

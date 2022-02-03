import axios from "axios";

import {
  addContactRequest,
  addContactError,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  getContactError,
  getContactRequest,
  getContactSuccess,
} from "./items-actions";

axios.defaults.baseURL = "https://61fb905c87801d0017a2c5b6.mockapi.io";

export const getContact = () => (dispatch) => {
  dispatch(getContactRequest());
  axios
    .get("/contacts")
    .then(({ data }) => {
      dispatch(getContactSuccess(data));
    })
    .catch((error) => dispatch(getContactError(error)));
};

export const addContact = (data) => (dispatch) => {
  dispatch(addContactRequest());
  axios
    .post("/contacts", data)
    .then(({ data }) => {
      dispatch(addContactSuccess(data));
    })
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(({ data }) => {
      dispatch(deleteContactSuccess(id));
      console.log(data);
    })
    .catch((error) => dispatch(deleteContactError(error)));
};

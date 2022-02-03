import { createReducer } from "@reduxjs/toolkit";
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

export const items = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) => [
    ...state.filter((element) => element.id !== payload),
  ],
  [getContactSuccess]: (_, { payload }) => payload,
});

export const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactError]: () => false,
  [addContactSuccess]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactError]: () => false,
  [deleteContactSuccess]: () => false,
  [getContactRequest]: () => true,
  [getContactError]: () => false,
  [getContactSuccess]: () => false,
});

export const error = createReducer("", {
  [addContactRequest]: () => "",
  [addContactError]: () => "Opps, we have some troubles with adding contact",
  [addContactSuccess]: () => "",
  [deleteContactRequest]: () => "",
  [deleteContactError]: () => "Opps, we have some troubles with deleting contact",
  [deleteContactSuccess]: () => "",
  [getContactRequest]: () => "",
  [getContactError]: () => "Opps, we have some troubles with loading contacts",
  [getContactSuccess]: () => "",
});

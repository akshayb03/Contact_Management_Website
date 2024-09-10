import { createSlice } from "@reduxjs/toolkit";
import { ContactType } from "../../utils/utils";

interface InitialState {
  contactList: ContactType[];
}

const initialState: InitialState = {
  contactList: [],
};

const slice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {
    saveNewContact: (state, { payload }) => {
      state.contactList.push(payload);
    },
    deleteContact: (state, { payload }) => {
      const filteredList = state.contactList.filter(
        (item) => item.id !== payload
      );
      state.contactList = filteredList;
    },
    editContact: (state, { payload }) => {
      const updatedList = state.contactList.map((item) => {
        return item.id === payload.id ? { ...item, ...payload } : item;
      });
      state.contactList = updatedList;
    },
  },
});

export const { saveNewContact, deleteContact, editContact } = slice.actions;

export default slice.reducer;

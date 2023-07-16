import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { dataType } from "../../model";
const items =
  localStorage.getItem("users") !== null
    ? JSON.parse(localStorage.getItem("users") || "")
    : [];

const initialValue: dataType[] = items;

const slice1 = createSlice({
  name: "slice1",
  initialState: initialValue,
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      state.push({ ...action.payload });
      localStorage.setItem("users", JSON.stringify(state));
    },
    deleteUser: (state, action) => {
      const { key } = action.payload;
      console.log(action.payload);
      const uu = state.find((item) => item.key == key);
      if (uu) {
        localStorage.removeItem("users");
        const newState = state.filter((item) => item.key !== key);
        localStorage.setItem("users", JSON.stringify(newState));
        return newState;
      }
    },
    editUser: (state, action) => {
      const { key, firstname, lastname, gender, phone, nationality } =
        action.payload;
      console.log(action.payload);
      const uu = state.find((item) => item.key == key);
      localStorage.removeItem("users");
      if (uu) {
        uu.firstname = firstname;
        uu.lastname = lastname;
        uu.gender = gender;
        uu.phone = phone;
        uu.nationality = nationality;
        localStorage.setItem("users", JSON.stringify([...state]));
      }
    },
  },
});

export const slice1Selector = (store: RootState) => store.slice1Reducer;
export default slice1.reducer;
export const { addUser, deleteUser, editUser } = slice1.actions;

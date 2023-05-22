import { createSlice } from "@reduxjs/toolkit";
//import axios from "axios";

export const mandalasSlice = createSlice({
    name: "mandalas",
    initialState: {
      list: [],
    },
    reducers: {
      setMandalas: (state, action) => {
        state.list = action.payload;
      }
    },
  });
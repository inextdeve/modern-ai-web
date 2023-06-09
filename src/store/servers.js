import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "servers",
  initialState: {
    items: [],
    selected: null,
    cloneSelected: null,
    createServerDialog: false,
  },
  reducers: {
    add(state, action) {
      state.items = [...state.items, ...action.payload];
    },
    setSelected(state, action) {

      if (action.payload === null) {
        state.selected = null;
        state.cloneSelected = null;
        return;
      }

      state.selected = state.items.filter(
        (item) => item.id === action.payload
      )[0];
      state.cloneSelected = state.items.filter(
        (item) => item.id === action.payload
      )[0];

    },
    editCurrent(state, action) {
      state.selected = { ...state.selected, ...action.payload };
    },
    setCreateServerDialog(state) {
      state.createServerDialog = !state.createServerDialog;
    },
  },
});

export { actions as serversActions };
export { reducer as serversReducer };

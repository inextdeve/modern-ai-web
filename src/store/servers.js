import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "servers",
  initialState: {
    items: [],
    selectedServer: null,
    openCreateServerDialog: false,
  },
  reducers: {
    add(state, action) {
      state.items = [...state.items, ...action.payload];
    },
    setSelectedServer(state, action) {
      state.selectedServer = state.items.filter(
        (item) => item.id === action.payload
      )[0];
    },
    editServer(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) return action.payload;
        return item;
      });
      state.selectedServer = action.payload;
    },
    setOpenCreateServerDialog(state) {
      state.openCreateServerDialog = !state.openCreateServerDialog;
    },
  },
});

export { actions as serversActions };
export { reducer as serversReducer };

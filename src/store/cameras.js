import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "cameras",
  initialState: {
    items: [],
    selectedCamera: null,
    openCreateCameraDialog: false,
  },
  reducers: {
    add(state, action) {
      state.items = [...state.items, ...action.payload];
    },
    setSelectedCamera(state, action) {
      state.selectedCamera = state.items.filter(
        (item) => item.id === action.payload
      )[0];
    },
    modifyCamera(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) return action.payload;
        return item;
      });
      state.selectedCamera = action.payload;
    },
    setOpenCreateCameraDialog(state) {
      state.openCreateCameraDialog = !state.openCreateCameraDialog;
    },
  },
});

export { actions as camerasActions };
export { reducer as camerasReducer };

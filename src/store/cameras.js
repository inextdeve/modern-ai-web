import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "cameras",
  initialState: {
    items: [],
    selectedCamera: null,
    cloneSelected: null,
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
      state.cloneSelected = state.items.filter(
        (item) => item.id === action.payload
      )[0];
    },
    editCurrent(state, action) {
      state.selectedCamera = { ...state.selectedCamera, ...action.payload };
    },
    setOpenCreateCameraDialog(state) {
      state.openCreateCameraDialog = !state.openCreateCameraDialog;
    },
  },
});

export { actions as camerasActions };
export { reducer as camerasReducer };

import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "analytics",
  initialState: {
    items: [],
    selectedModule: null,
  },
  reducers: {
    add(state, action) {
      state.items = [...state.items, ...action.payload];
    },
    setSelectedModule(state, action) {
      state.selectedModule = state.items.filter(
        (item) => item.id === action.payload
      )[0];
    },
  },
});

export { actions as analyticsActions };
export { reducer as analyticsReducer };

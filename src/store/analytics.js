import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "analytics",
  initialState: {
    items: [],
    selected: null,
    createAnalyticsDialog: false
  },
  reducers: {
    add(state, action) {
      state.items = [...state.items, ...action.payload];
    },
    setSelected(state, action) {
      state.selected = state.items.filter(
        (item) => item.id === action.payload
      )[0];
    },
    setCreateAnalyticsDialog(state, action) {
      state.createAnalyticsDialog = !state.createAnalyticsDialog
    }
  },
});

export { actions as analyticsActions };
export { reducer as analyticsReducer };

import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
  name: "users",
  initialState: {
    users: [],
    groups: [],
    selectedUser: null,
    selectedGroup: null,
    openCreateUserDialog: false,
    openEditUserDialog: false,
  },
  reducers: {
    add(state, action) {
      state.users = [...state.users, ...action.payload.users];
      state.groups = [...state.groups, ...action.payload.groups];
    },
    setSelectedUser(state, action) {
      //type mean user or group
      state.selectedUser = state[action.payload.type].filter(
        (user) => user.id === action.payload.id
      )[0];
    },
    editServer(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) return action.payload;
        return item;
      });
      state.selectedServer = action.payload;
    },
    setOpenCreateUserDialog(state) {
      state.openCreateUserDialog = !state.openCreateUserDialog;
    },
    setOpenEditUserDialog(state) {
      state.openEditUserDialog = !state.openEditUserDialog;
    },
  },
});

export { actions as usersActions };
export { reducer as usersReducer };

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const createServer = createAsyncThunk(
  "servers/create",
  async ({ name }, { rejectWithValue, getState }) => {
    const token = getState().auth.userToken;
    try {
      // configure header's Content-Type as JSON
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name }),
      };

      const response = await fetch("/api/server", config);

      const data = await response.json();

      // if (data.error) throw new Error(data.error);

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateServer = createAsyncThunk(
  "servers/update",
  async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.userToken;
    const server = getState().servers.selected;
    try {
      // configure header's Content-Type as JSON
      const config = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(server),
      };

      const response = await fetch("/api/server", config);

      const data = await response.json();

      // if (data.error) throw new Error(data.error);

      return data;
    } catch (error) {
      console.log(error);
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deleteServer = createAsyncThunk(
  "servers/delete",
  async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.userToken;
    const selectedServer = getState().servers.selected.id;
    try {
      // configure header's Content-Type as JSON
      const config = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id: selectedServer }),
      };

      const response = await fetch(`/api/server`, config);

      const data = await response.json();

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const { reducer, actions } = createSlice({
  name: "servers",
  initialState: {
    items: [],
    selected: null,
    cloneSelected: null,
    createServerDialog: false,
    loading: false,
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
    setLoading(state, { payload }) {
      state.loading = payload;
    },
  },
  extraReducers: {
    //Create Server
    [createServer.pending]: (state) => {
      toast("Loading ...");
    },
    [createServer.fulfilled]: (state, { payload }) => {
      toast.dismiss();
      state.items = [...state.items, payload];
      state.selected = payload;
      state.cloneSelected = payload;
      toast.success("Added successfully");
    },
    [createServer.rejected]: (state, { payload }) => {
      toast("error");
    },
    //Update Server
    [updateServer.pending]: (state) => {
      toast.loading("Updating ...");
    },
    [updateServer.fulfilled]: (state, { payload }) => {
      toast.dismiss();
      state.items = state.items.map((item) => {
        if (item.id === state.selected.id) {
          return { ...state.selected };
        }
        return item;
      });
      state.cloneSelected = state.selected;
      toast.success("Updated");
    },
    [updateServer.rejected]: (state, { payload }) => {
      toast("error");
    },
    //Delete Server
    [deleteServer.pending]: (state) => {
      toast.loading("Deleting ...");
    },
    [deleteServer.fulfilled]: (state, { payload }) => {
      toast.dismiss();
      state.items = state.items.filter((item) => {
        return item.id !== state.selected.id;
      });
      state.cloneSelected = null;
      state.selected = null;
      toast.success("Deleted");
    },
    [deleteServer.rejected]: (state, { payload }) => {
      toast("error");
    },
  },
});

export { actions as serversActions };
export { reducer as serversReducer };

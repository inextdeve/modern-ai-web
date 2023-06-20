import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const backendURL = "";
export const createCamera = createAsyncThunk(
  "cameras/create",
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

      const response = await fetch(`${backendURL}/api/camera`, config);

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

export const updateCamera = createAsyncThunk(
  "cameras/update",
  async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.userToken;
    const camera = getState().cameras.selectedCamera;
    try {
      // configure header's Content-Type as JSON
      const config = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(camera),
      };

      const response = await fetch(`${backendURL}/api/camera`, config);

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

export const deleteCamera = createAsyncThunk(
  "cameras/delete",
  async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.userToken;
    const selectedCamera = getState().cameras.selectedCamera.id;
    try {
      // configure header's Content-Type as JSON
      const config = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id: selectedCamera }),
      };

      const response = await fetch(`/api/camera`, config);

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
  name: "cameras",
  initialState: {
    items: [],
    selectedCamera: null,
    cloneSelected: null,
    createCameraDialog: false,
    loading: false,
  },
  reducers: {
    add(state, action) {
      state.items = [...state.items, ...action.payload];
    },
    setSelectedCamera(state, action) {
      if (action.payload === null) {
        state.selectedCamera = null;
        state.cloneSelected = null;
        return;
      }
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
    setCreateCameraDialog(state) {
      state.createCameraDialog = !state.createCameraDialog;
    },
    setLoading(state, { payload }) {
      state.loading = payload;
    },
  },
  extraReducers: {
    //Create Camera
    [createCamera.pending]: (state) => {
      toast("Loading ...");
    },
    [createCamera.fulfilled]: (state, { payload }) => {
      toast.dismiss();
      state.items = [...state.items, payload];
      state.selectedCamera = payload;
      state.cloneSelected = payload;
      toast.success("Added successfully");
    },
    [createCamera.rejected]: (state, { payload }) => {
      toast("error");
    },
    //Update Camera
    [updateCamera.pending]: (state) => {
      toast.loading("Updating ...");
    },
    [updateCamera.fulfilled]: (state, { payload }) => {
      toast.dismiss();
      state.items = state.items.map((item) => {
        if (item.id === state.selectedCamera.id) {
          return { ...state.selectedCamera };
        }
        return item;
      });
      state.cloneSelected = state.selectedCamera;
      toast.success("Updated");
    },
    [updateCamera.rejected]: (state, { payload }) => {
      toast("error");
    },
    //Delete Camera
    [deleteCamera.pending]: (state) => {
      toast.loading("Deleting ...");
    },
    [deleteCamera.fulfilled]: (state, { payload }) => {
      toast.dismiss();
      state.items = state.items.filter((item) => {
        return item.id !== state.selectedCamera.id;
      });
      state.cloneSelected = null;
      state.selectedCamera = null;
      toast.success("Deleted");
    },
    [deleteCamera.rejected]: (state, { payload }) => {
      toast("error");
    },
  },
});

export { actions as camerasActions };
export { reducer as camerasReducer };

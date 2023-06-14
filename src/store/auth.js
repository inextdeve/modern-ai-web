import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const backendURL = "http://localhost:3000";

const initialState = {
  loading: false,
  userInfo: null, // for user object
  userToken, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

const userLogin = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      };

      const response = await fetch(`${backendURL}/auth/login`, config);

      if (!response.ok) throw new Error(await response.json().error);

      const data = await response.json();

      // store user's token in local storage
      localStorage.setItem("userToken", data.userToken);
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
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export { userLogin };
export { actions as authActions };
export { reducer as authReducer };

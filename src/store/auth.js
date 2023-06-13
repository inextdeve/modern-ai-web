import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const userToken = localStorage.getItem('userToken')
    ? localStorage.getItem('userToken')
    : null

const backendURL = 'http://127.0.0.1:5000'


const initialState = {
    loading: false,
    userInfo: null, // for user object
    userToken, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration process.
}

const userLogin = createAsyncThunk(
    'auth/login',
    async ({ username, password }, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            // const { data } = await fetch(
            //     `${backendURL}/api/user/login`,
            //     { email, password },
            //     config
            // )

            const fakeFech = new Promise((resolve, reject) => {
                const data = { username, password, userToken: 48484 }
                resolve(data)
            })

            const data = await fakeFech;
            console.log("data", data)
            // store user's token in local storage
            localStorage.setItem('userToken', data.userToken)
            return data
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

const { reducer, actions } = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: {
        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.userToken
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    },
})

export { userLogin }
export { actions as authActions };
export { reducer as authReducer };
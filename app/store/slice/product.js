import { createSlice } from "@reduxjs/toolkit"
import { apiCallBegan } from '../api'
const initialState = {
    user: [],
    loading: false,
    error: null
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        apiLoading: (state, action) => {
            state.loading = true;
        },
        apiLoadingField: (state, action) => {
            state.loading = false;
            state.error = action.payload

        },
        loginAuth: (state, action) => {
            state.user = action.payload;
            state.loading = false;
        },
        getAuth: (state, action) => {
            state.user = action.payload
        }
    }
})

const url = 'auth/login'
export const login = (userData) => apiCallBegan({
    url,
    method: 'POST',
    onStart: apiLoading.type,
    onSuccess: loginAuth.type,
    onError: apiLoadingField.type,
    data: userData
})
export const get = (userData) => apiCallBegan({
    url: 'auth/me',
    onStart: apiLoading.type,
    onSuccess: getAuth.type,
    onError: apiLoadingField.type,
    token: userData
})
export const { getAuth, loginAuth, apiLoading, apiLoadingField } = AuthSlice.actions
export default AuthSlice.reducer
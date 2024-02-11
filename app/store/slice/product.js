
import { createSlice } from "@reduxjs/toolkit"
import { apiCallBegan } from '../action_creater/api'
const initialState = {
    product: [],
    loading: false,
    error: null
}

const AuthSlice = createSlice({
    name: 'product',
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
        getProduct: (state, action) => {
            console.log(action,payload)
            state.product = action.payload
        }
    }
})

const url = 'prodacuts'
export const login = (userData) => apiCallBegan({
    url,
    method: 'POST',
    onStart: apiLoading.type,
    onSuccess: loginAuth.type,
    onError: apiLoadingField.type,
    data: userData
})
export const get = () => apiCallBegan({
    url: url,
    onStart: apiLoading.type,
    onSuccess: getProduct.type,
    onError: apiLoadingField.type,
})
export const { getProduct, loginAuth, apiLoading, apiLoadingField } = AuthSlice.actions
export default AuthSlice.reducer